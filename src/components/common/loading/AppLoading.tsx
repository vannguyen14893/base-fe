import {Spin} from "antd";

function AppLoading() {
    return (
        <Spin style={{justifyContent: "center", alignItems: "center", marginTop: 320, marginLeft: 100}} tip="Loading"
              size="large">
            <div className="content"/>
        </Spin>)
}

export default AppLoading;