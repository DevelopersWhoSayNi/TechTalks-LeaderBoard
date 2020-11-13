import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TechTalks-LeaderBoard')
HiddenFlags = ["Amir is awesome", "Amir is super awesome", "Amir is great"]


def lambda_handler(event, context):
    result = table.scan(
        AttributesToGet=["UserID", "Score", "Name", "LastFlagUploadedAt"])
    return {
        'statusCode': 200,
        'body': {"result": result['Items']}
    }
