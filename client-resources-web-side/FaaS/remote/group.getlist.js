/* Concatenate browser pack tool: This file is not compressed and converted into es5 */

module.exports = async function main(data) {
    var token = data.token;
    const env = {
        token: token
    };
    var res = await sdk.common.makeRequest((await sdk.getConfig('server')).group_server.list_group, env);
    return (await sdk.common.convertResponse(res));
};