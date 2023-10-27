/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export const environment = {
  production: true,
  endpoint: {
    access: {
      auth: 'http://internal-microservices-auth/api/auth/',
      home: 'http://internal-microservices-home/api/home/',
    },
    scheduling: {
      consulting: 'http://internal-microservices-consulting/api/consulting/'
    }
  }
};