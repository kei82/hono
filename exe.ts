import { lambdaHandler as lambdaHandler1 } from "./app";
import { lambdaHandler as lambdaHandler2 } from "./app2";
{
  const test1 = await lambdaHandler1(
    {
      version: "2.0",
      resource: "/api/v1/post",
      path: "/api/v1/post",
      httpMethod: "POST",
      headers: {
        header1: "value1",
        header2: "value1,value2",
        "content-type": "application/json",
      },
      multiValueHeaders: {
        header1: ["value1"],
        header2: ["value1", "value2"],
      },
      queryStringParameters: {
        parameter1: "value1,value2",
        parameter2: "value",
      },
      multiValueQueryStringParameters: {
        parameter1: ["value1", "value2"],
        parameter2: ["value"],
      },
      pathParameters: { name: "dwdwd" },
      requestContext: {
        accountId: "123456789012",
        apiId: "id",
        authorizer: {},
        domainName: "id.execute-api.us-east-1.amazonaws.com",
        domainPrefix: "id",
        extendedRequestId: "request-id",
        httpMethod: "POST",
        path: "/api/v1/post",
        protocol: "HTTP/1.1",
        requestId: "id",
        requestTime: "04/Mar/2020:19:15:17 +0000",
        requestTimeEpoch: 1583349317135,
        resourceId: "resource-id",
        resourcePath: "/api/v1/post",
        stage: "$default",
        identity: {
          sourceIp: "127.0.0.1",
          userAgent: "Custom User Agent String",
        },
      },
      body: JSON.stringify({ name: "test" }),
      isBase64Encoded: false,
    },
    {
      callbackWaitsForEmptyEventLoop: false,
      functionName: "lambdaHandler1",
      functionVersion: "1",
      invokedFunctionArn: "1",
      memoryLimitInMB: "1",
      awsRequestId: "lambdaHandler1",
      logGroupName: "1",
      logStreamName: "1",
      getRemainingTimeInMillis: function (): number {
        throw new Error("Function not implemented.");
      },
    }
  );

  console.log(test1);
}
{
  const test2 = await lambdaHandler2(
    {
      version: "2.0",
      resource: "/api/v1/get",
      path: "/api/v1/get",
      httpMethod: "GET",
      headers: {},
      multiValueHeaders: {},
      queryStringParameters: {
        name: "value",
      },
      multiValueQueryStringParameters: {
        name: ["value"],
      },
      pathParameters: {},
      requestContext: {
        accountId: "123456789012",
        apiId: "id",
        authorizer: {},
        domainName: "id.execute-api.us-east-1.amazonaws.com",
        domainPrefix: "id",
        extendedRequestId: "request-id",
        httpMethod: "GET",
        path: "/api/v1/get",
        protocol: "HTTP/1.1",
        requestId: "id",
        requestTime: "04/Mar/2020:19:15:17 +0000",
        requestTimeEpoch: 1583349317135,
        resourceId: "resource-id",
        resourcePath: "/api/v1/get",
        stage: "$default",
        identity: {
          sourceIp: "127.0.0.1",
          userAgent: "Custom User Agent String",
        },
      },
      body: null,
      isBase64Encoded: false,
    },
    {
      callbackWaitsForEmptyEventLoop: false,
      functionName: "lambdaHandler2",
      functionVersion: "2",
      invokedFunctionArn: "2",
      memoryLimitInMB: "2",
      awsRequestId: "lambdaHandler2",
      logGroupName: "2",
      logStreamName: "2",
      getRemainingTimeInMillis: function (): number {
        throw new Error("Function not implemented.");
      },
    }
  );

  console.log(test2);
}
