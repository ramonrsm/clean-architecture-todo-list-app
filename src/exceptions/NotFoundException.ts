export default class NotFoundException extends Error {
  name: string = "NotFoundException";

  constructor(message: string) {
    super(message);
  }
}
