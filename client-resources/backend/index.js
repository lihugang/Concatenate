/**
 * @Author          : lihugang
 * @Date            : 2022-07-22 16:08:33
 * @LastEditTime    : 2022-07-22 16:28:35
 * @LastEditors     : lihugang
 * @Description     : 
 * @FilePath        : c:\Users\heche\AppData\Roaming\concatenate.pz6w7nkeote\resources\backend\index.js
 * @Copyright (c) lihugang
 * @长风破浪会有时 直挂云帆济沧海
 * @There will be times when the wind and waves break, and the sails will be hung straight to the sea.
 * @ * * * 
 * @是非成败转头空 青山依旧在 几度夕阳红
 * @Whether it's right or wrong, success or failure, it's all empty now, and it's all gone with the passage of time. The green hills of the year still exist, and the sun still rises and sets.
 */
module.exports = function(map) {

    const { Logger } = map;

    const msgLogger = new Logger('ipcChannel');

    msg_process(msgLogger,map);
};

function msg_process(logger,map) {
    const ipcMain = require('electron').ipcMain;
    
    ipcMain.on('get-config', function (e, msg) {
        logger.info('Get message: get-config',msg);
        const data = map.config_ptr.config;
        if (msg == '' || msg == '.') e.sender.send('get-config',data);
        else e.sender.send('get-config',data[msg] || {});
    });
};