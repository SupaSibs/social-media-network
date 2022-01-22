import { jsx as _jsx } from "react/jsx-runtime";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Alert = ({ alerts }) => alerts !== null && alerts.length > 0
    ? alerts.map((alert) => {
        return (_jsx("div", Object.assign({ className: `alert alert-${alert.alertType}` }, { children: alert.msg }), alert.id));
    })
    : null;
Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => {
    return {
        alerts: state.alert,
    };
};
export default connect(mapStateToProps)(Alert);
