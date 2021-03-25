# aws-cdk-lambda

An improved version of the Lambda example from https://docs.aws.amazon.com/cdk/latest/guide/serverless_example.html

* Store all CDK-related code in `cdk` directory
* Main Lambda handler is also written in Typescript

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
