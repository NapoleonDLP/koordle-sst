import * as sst from '@serverless-stack/resources';

export default class ApiStack extends sst.Stack {
  api;

  constructor(scope, id, props) {
    super(scope, id, props);

    const { table } = props;

    this.api = new sst.Api(this, 'Api', {
      defaultFunctionProps: {
        environment: {
          TABLE_NAME: table.tableName,
        },
      },
      routes: {
        'POST /games': 'src/create.main',
        'GET /new-word': 'src/getNewWord.main',
      },
    });
    // Allow the APi to access the table
    this.api.attachPermissions([table]);

    // Show the API endpoint int he output
    this.addOutputs({
      ApiEndpoint: this.api.url,
    });
  }
}
