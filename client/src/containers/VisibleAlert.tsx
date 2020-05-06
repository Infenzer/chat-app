import { connect, ConnectedProps } from "react-redux";
import Alert from "../components/Alert";
import { RootState } from "../redux/reducers";
import { hideAlert } from "../redux/actions/visibleAlert";

export type AlertProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  text: state.alert.text,
  type: state.alert.type,
  visible: state.alert.visible
})

const mapDispathToProps = dispatch => ({
  hideAlert: () => dispatch(hideAlert())
})

const connector = connect(mapStateToProps, mapDispathToProps)

export default connector(Alert)