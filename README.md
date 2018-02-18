# Chakram multipart file upload with authentication

A working example of multipart file upload to a protected REST API.

## Solution contents

* REST API built on .NET Core, allows files upload. Set local port to 5000 in `launchSettings.json` and run with `dotnet run` from command line.
* Chakram integration test, which uploads a file to the API, and asserts response status code to be 200. Run in the command line with `npm test`.

Blog post with more details is [here](https://ignas.me/tech/chakram-multipart-file-upload-auth/).
