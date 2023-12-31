## Folders architecture

### shared
    + components <contains all shared components of application>
    + services < contains all shared services of application >
        + http < contains all shared http request >
        + dependencies < contains all dependencies injection >
    + store < contains global state or store of application >
    + settings < configuration of application >
    + utils < utilities of application >

This folder contains all shared objects of application

## < Name of functionnality or group of functionnality >
## components
    + <name component>
Process to naming components <Name_of_functionnality.Name_Of_Component.components.extension>
### services
    + http
    + dependencies
This folder content, Http services for communication with backend and dependencies injections. This reparties
### store
    + <all stores files[]>
This folder contains reducer and dispactcher, needed to store and update data
### styles
    + < All shared styles files of current functionnality >
This folder contains all css or scss files of functionnality
### settings
    + <file contains configuration of functionnality>
This folder contains all file configuration of functionnality
### utils
    + <all features utils for functionnality>
This folder contains all classes utilities of current functionnality
### routes
    + <file contains all routes lazy>
This folder contains all asynchronous routes (more performant) of current functionnality