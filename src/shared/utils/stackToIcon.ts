import reactIcon from "../../assets/react_icon.png";
import nodeIcon from "../../assets/node_icon.png";
import tsIcon from "../../assets/typescript_icon.png";
import flutterIcon from "../../assets/flutter_icon.png";
import javaIcon from "../../assets/java_icon.png";
import angularIcon from "../../assets/angular_icon.png";
import { Stack } from "../types/Stack";

export default function stackToIcon(stack: Stack): any {
  switch (stack) {
    case Stack.REACT:
      return reactIcon;
    case Stack.NODE:
      return nodeIcon;
    case Stack.TYPESCRIPT:
      return tsIcon;
    case Stack.FLUTTER:
      return flutterIcon;
    case Stack.JAVA:
      return javaIcon;
    case Stack.ANGULAR:
      return angularIcon;
    default:
      break;
  }
}
