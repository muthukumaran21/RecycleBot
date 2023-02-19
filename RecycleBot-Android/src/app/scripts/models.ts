/**
 * Models generated from "Model and Storage" and models extracted from services.
 * To generate entity use syntax:
 * Apperyio.EntityAPI("<model_name>[.<model_field>]");
 */
export var models = {
    "MessageModel": {
        "type": "object",
        "properties": {
            "me": {
                "type": "boolean"
            },
            "message": {
                "type": "string"
            },
            "time": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "MessagesModel": {
        "type": "array",
        "items": [{
            "type": "MessageModel"
        }]
    },
    "Marker": {
        "type": "object",
        "properties": {
            "latitude": {
                "type": "string"
            },
            "longitude": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "Any": {
        "type": "any"
    },
    "Function": {
        "type": "Function"
    },
    "Promise": {
        "type": "Promise"
    },
    "Boolean": {
        "type": "boolean"
    },
    "Observable": {
        "type": "Observable"
    },
    "SignupService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/users"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "password": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            },
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "_id": {
                                "type": "string"
                            },
                            "_updatedAt": {
                                "type": "string"
                            },
                            "sessionToken": {
                                "type": "string"
                            },
                            "_createdAt": {
                                "type": "string"
                            },
                            "username": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LogoutService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/logout"
            },
            "method": {
                "type": "string",
                "default": "get"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Session-Token": {
                                "type": "string"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "Photo__files_upload_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/files"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{Photo_settings.database_id}"
                            },
                            "X-Appery-Master-Key": {
                                "type": "string",
                                "default": "{Photo_settings.master_key}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {
                                    "filename": {
                                        "type": "string"
                                    },
                                    "fileurl": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "recycleDB__files_upload_service": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/files"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "data"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "X-Appery-Master-Key": {
                                "type": "string",
                                "default": "db6af4e7-a3b2-4965-aa7b-db0254b3d9b1"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{recycleDB_settings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "$": {
                                "type": "object",
                                "properties": {}
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "LoginService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/db/login"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "username": {
                                "type": "string"
                            },
                            "password": {
                                "type": "string"
                            }
                        }
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "X-Appery-Database-Id": {
                                "type": "string",
                                "default": "{SecuritySettings.database_id}"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {
                            "sessionToken": {
                                "type": "string"
                            },
                            "_id": {
                                "type": "string"
                            }
                        }
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            }
        }
    },
    "RESTService": {
        "type": "object",
        "properties": {
            "url": {
                "type": "string",
                "default": "https://api.appery.io/rest/1/proxy/tunnel"
            },
            "method": {
                "type": "string",
                "default": "post"
            },
            "request": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "any",
                        "default": "{\n  \"requests\":[\n    {\n      \"image\":{\n        \"source\":{\n          \"imageUri\": \"https://www.gstatic.com/webp/gallery/4.webp\"\n        }\n      },\n      \"features\":[\n        {\n          \"type\":\"LABEL_DETECTION\",\n          \"maxResults\":1\n        }\n      ]\n    }\n  ]\n}"
                    },
                    "query": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "default": "application/json"
                            },
                            "appery-transformation": {
                                "type": "string",
                                "default": "checkTunnel"
                            },
                            "appery-rest": {
                                "type": "string",
                                "default": "294ef3d5-cedb-4bf1-9427-aa7a3ad76702"
                            },
                            "appery-proxy-url": {
                                "type": "string",
                                "default": "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDmfHuJrAh9f-LmCsomTLXZSVXC56QGxBM"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "body": {
                        "type": "object",
                        "properties": {}
                    },
                    "headers": {
                        "type": "object",
                        "properties": {}
                    }
                }
            },
            "echo": {
                "type": "string",
                "default": "{}"
            }
        }
    },
    "GeoService_Google_Map": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {}
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "latitude": {
                                "type": "number",
                                "default": null
                            },
                            "longitude": {
                                "type": "number",
                                "default": null
                            }
                        }
                    }
                }
            }
        }
    },
    "GeoService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {}
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "longitude": {
                                "type": "number",
                                "default": null
                            },
                            "latitude": {
                                "type": "number",
                                "default": null
                            }
                        }
                    }
                }
            }
        }
    },
    "CameraService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "saveToPhotoAlbum": {
                                "type": "boolean",
                                "default": null
                            },
                            "destinationType": {
                                "type": "string",
                                "default": "FILE_URI"
                            },
                            "allowEdit": {
                                "type": "boolean",
                                "default": null
                            },
                            "sourceType": {
                                "type": "string",
                                "default": "CAMERA"
                            },
                            "cameraDirection": {
                                "type": "string",
                                "default": "BACK"
                            },
                            "quality": {
                                "type": "number",
                                "default": 100
                            },
                            "mediaType": {
                                "type": "string",
                                "default": "PICTURE"
                            },
                            "targetWidth": {
                                "type": "number",
                                "default": null
                            },
                            "targetHeight": {
                                "type": "number",
                                "default": null
                            },
                            "popoverOptions": {
                                "type": "any"
                            },
                            "correctOrientation": {
                                "type": "boolean",
                                "default": true
                            },
                            "encodingType": {
                                "type": "string",
                                "default": "JPEG"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "imageURI": {
                                "type": "string"
                            },
                            "fileSrc": {
                                "type": "string"
                            },
                            "imageDataBase64": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    },
    "FileReadService_File_Read": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "filePath": {
                                "type": "string"
                            },
                            "fileInput": {
                                "type": "any"
                            },
                            "resultFormat": {
                                "type": "string",
                                "default": "FORM_DATA"
                            },
                            "blobType": {
                                "type": "string"
                            },
                            "formDataFileName": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "any"
                            }
                        }
                    }
                }
            }
        }
    },
    "FileReadService": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "formDataFileName": {
                                "type": "string"
                            },
                            "fileInput": {
                                "type": "any"
                            },
                            "filePath": {
                                "type": "string"
                            },
                            "resultFormat": {
                                "type": "string",
                                "default": "FORM_DATA"
                            },
                            "blobType": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "data": {
                                "type": "any"
                            }
                        }
                    }
                }
            }
        }
    },
    "CameraService_Take_photo_and_upload_into_Appery_database": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "targetWidth": {
                                "type": "number",
                                "default": null
                            },
                            "saveToPhotoAlbum": {
                                "type": "boolean",
                                "default": null
                            },
                            "popoverOptions": {
                                "type": "any"
                            },
                            "sourceType": {
                                "type": "string",
                                "default": "CAMERA"
                            },
                            "allowEdit": {
                                "type": "boolean",
                                "default": null
                            },
                            "cameraDirection": {
                                "type": "string",
                                "default": "BACK"
                            },
                            "correctOrientation": {
                                "type": "boolean",
                                "default": true
                            },
                            "encodingType": {
                                "type": "string",
                                "default": "JPEG"
                            },
                            "mediaType": {
                                "type": "string",
                                "default": "PICTURE"
                            },
                            "targetHeight": {
                                "type": "number",
                                "default": null
                            },
                            "quality": {
                                "type": "number",
                                "default": 100
                            },
                            "destinationType": {
                                "type": "string",
                                "default": "FILE_URI"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "imageURI": {
                                "type": "string"
                            },
                            "imageDataBase64": {
                                "type": "string"
                            },
                            "fileSrc": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    },
    "CameraService_Camera": {
        "type": "object",
        "properties": {
            "request": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "popoverOptions": {
                                "type": "any"
                            },
                            "destinationType": {
                                "type": "string",
                                "default": "FILE_URI"
                            },
                            "encodingType": {
                                "type": "string",
                                "default": "JPEG"
                            },
                            "mediaType": {
                                "type": "string",
                                "default": "PICTURE"
                            },
                            "correctOrientation": {
                                "type": "boolean",
                                "default": true
                            },
                            "sourceType": {
                                "type": "string",
                                "default": "CAMERA"
                            },
                            "targetHeight": {
                                "type": "number",
                                "default": null
                            },
                            "allowEdit": {
                                "type": "boolean",
                                "default": null
                            },
                            "saveToPhotoAlbum": {
                                "type": "boolean",
                                "default": null
                            },
                            "quality": {
                                "type": "number",
                                "default": 100
                            },
                            "targetWidth": {
                                "type": "number",
                                "default": null
                            },
                            "cameraDirection": {
                                "type": "string",
                                "default": "BACK"
                            }
                        }
                    }
                }
            },
            "response": {
                "type": "object",
                "properties": {
                    "data": {
                        "type": "object",
                        "properties": {
                            "fileSrc": {
                                "type": "string"
                            },
                            "imageDataBase64": {
                                "type": "string"
                            },
                            "imageURI": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    }
};
/**
 * Data storage
 */
export const _aioDefStorageValues = {
    variables: {
    },
    storages: {
    }
}