import StorageStack from "./StorageStack";
import ApiStack from './ApiStack';

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  const storageStack = new StorageStack(app, "storage");

  // Add more stacks
  new ApiStack(app, 'api', {
    table: storageStack.table,
  });
}
