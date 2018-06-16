# Airfec

Recreating Airbnb item details page


## Related Projects

- https://github.com/the-big-mak/airfec-photos-vlad
- https://github.com/the-big-mak/airfec-description-brian
- https://github.com/the-big-mak/airfec-reviews-justus
- https://github.com/the-big-mak/airfec-proxy-aaron

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

INITIAL SET UP
1. Create Account on https://aws.amazon.com/s3/
2. Retrieve Security Credentials (https://imgur.com/Mb1AkoG, https://imgur.com/bffxIfi)
3. Rename helpers/example.config.js into config.js with your credentials
4. Rename helpers/example.mysqlConfig.js into mysqlConfig.js with your mysql username and password
5. Run mysql.server start
6. Populate schema with a fake data: mysql -u [USERNAME] -p < schema.sql (DEFAULT EXAMPLE: mysql -u root < schema.sql);
    NOTE: At this point urls in table are fake.
7. In server/index.js uncomment 2 lines to use helper function (helper.updatePhotos();) (https://imgur.com/5JVpkuL);
    (this will create API request to s3 server and updates database with urls from MY s3 bucket, if you want to use your images see CUSTOMIZATION)
8. Start server (npm start);
9. When you see 'image updated!' in your terminal it means that your database is now populated with some real image urls.
10. Comment out helper function 
    ```
    helper.updatePhotos();
    ```

    NOTE: If you will not comment those out it will change database each time you call server


CUSTOMIZATION
1. Create a bucket on your s3 account.
    NOTE: Make your bucket AND all images public
2. Drag and drop your images directly in that bucket (do not create any folders)
3. You need to change only 3 lines in helpers/getPhotos.js (https://imgur.com/SwwLvsM)
4. Do 7, 8, 9, 10 steps from INITIAL SET UP

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## Additional note
.eslint "extends": ["airbnb-base"] NOT "extends": ["airbnb"]



