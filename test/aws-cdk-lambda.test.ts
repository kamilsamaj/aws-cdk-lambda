import {
  expect as expectCDK,
  MatchStyle,
  matchTemplate,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import * as AwsCdkLambda from "../cdk/aws-cdk-lambda-stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new AwsCdkLambda.AwsCdkLambdaStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {},
      },
      MatchStyle.EXACT
    )
  );
});
