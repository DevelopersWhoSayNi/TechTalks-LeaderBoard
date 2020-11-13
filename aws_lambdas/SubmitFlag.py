import boto3
import json
from decimal import Decimal
from datetime import datetime
import traceback

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TechTalks-LeaderBoard')
HiddenFlags = ["Amir is awesome", "Amir is super awesome", "Amir is great"]


def lambda_handler(event, context):
    result = 'Not submited'
    flag_score = 0

    if event['Flag'] in HiddenFlags:
        result = 'Correct'
        flag_score = GetFlagScore(event['Flag'])

        response = table.get_item(
            Key={
                'UserID': event['UserID'].upper()
            }
        )

        try:
            current_data = response['Item']
        except Exception as error:
            table.put_item(
                Item={
                    'Name': event['Name'],
                    'UserID': event['UserID'].upper(),
                    'DiscoveredFlags': event['Flag'],
                    'Score': flag_score,
                    'CreatedAt': str(datetime.now()),
                    'LastFlagUploadedAt': str(datetime.now())
                }
            )
        else:
            if event['Flag'] in current_data['DiscoveredFlags']:
                result = 'Points for this flag is rewarded before'
            else:
                flag_score = GetFlagScore(event['Flag'])
                new_DiscoveredFlags = current_data['DiscoveredFlags'] + \
                    ' ' + event['Flag']
                response = table.update_item(
                    Key={
                        'UserID': event['UserID']
                    },
                    UpdateExpression="set Score = Score + :val, DiscoveredFlags = :flg, LastFlagUploadedAt=:upd",
                    ExpressionAttributeValues={
                        ':val': Decimal(flag_score),
                        ':flg': new_DiscoveredFlags,
                        ':upd': str(datetime.now())
                    },
                    ReturnValues="UPDATED_NEW"
                )

    else:
        result = 'Wrong'

    return {
        'message': result,
        'points_awarded': flag_score
    }


def GetFlagScore(flag):
    flag_scores = [{"Flag": "Amir is awesome", "Score": 500}, {
        "Flag": "Amir is super awesome", "Score": 1000}, {"Flag": "Amir is great", "Score": 1500}]

    for flag_score in flag_scores:
        if flag_score['Flag'] == flag:
            return flag_score['Score']
