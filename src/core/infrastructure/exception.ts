export namespace InfrastructureException {
  export class HttpError extends Error {
    constructor(
      public readonly message: string
    ) {
      super(message);
    }
  }
}
