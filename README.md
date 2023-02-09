# data-visualization
- use [compose file](./docker/docker-compose.yml) to set stack in docker
- run `docker-compose up -d`
- refer to [this](https://github.com/Onunda/nig-stack)
## Docs

- [Grafana docs](https://grafana.com/docs/)

- [Node-red docs](https://nodered.org/docs/)

- [InfluxDB docs](https://docs.influxdata.com/)

## Useful resources

- [Youtube resources](https://youtube.com/playlist?list=PLviskRVPQfMUkYqUomQZiT95qjk7a5Wf1)

- [CSV file sample](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1105317/ghg-conversion-factors-2022-flat-format.xls)

- [Node-red reads spreadsheet files](https://flows.nodered.org/node/node-red-contrib-spreadsheet-in)

## Data Visualization worklfow

![](./img/data%20vis%20flow.png)

### Node-red flow
#### Read data from a spreadsheet and convert cells into a json file
- add pallete `node-red-contrib-spreadsheet-in`
- run node-red
- import the given [flow](./flows/flow1.json)
- deploy it
- download [spreadsheet](https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1105317/ghg-conversion-factors-2022-flat-format.xls) and specify the path of this file in the flow (file node), you may copy this file to container if you are using docker
- call api localhoat:[port]/data
![](./img/node-red-flow.png)
#### Read data from a spreadsheet and send each value one by one to influx
- same steps as mentioned above
- add pallete `node-red-contrib-influxdb`
- setup influx first
- create bucket in influxDB and connect it to your influx node
- import the given [flow](./flows/flow2.json)
![](./img/node-red-flow2.png)

#### File Browser 

- import the given [flow](./flows/flows-file-browser.json)
- refer to [this](https://flows.nodered.org/flow/44bc7ad491aacb4253dd8a5f757b5407) to get more info about this flow.
- run `docker cp local/path/to/app [container_id]:/usr/src/node-red/` to copy app into container
- run `docker exec -it -u root node-red bash` to open bash with root priviliges

##### File Uploader Set Up (uploads into local folder)

- `cd uploadApp`
- make sure you have nodejs installed as well as npm/yarn
- `yarn install`
- `yarn start` to build the project and run the node server
- `yarn host` (2nd terminal) to run the frontend with exposed host port
- the app is available at `http://localhost:5173/`
- the app server is available at `http://localhost:3001/`
