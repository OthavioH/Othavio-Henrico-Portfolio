import { Stack } from "../types/Stack";

export default function stackToIcon(stack: Stack): string | undefined {
  switch (stack) {
    case Stack.REACT:
      return "react_icon.png";
    case Stack.NEXT:
      return "next_icon.svg";
    case Stack.NODE:
      return "node_icon.png";
    case Stack.TYPESCRIPT:
      return "typescript_icon.png";
    case Stack.FLUTTER:
      return "flutter_icon.png";
    case Stack.JAVA:
      return "java_icon.png";
    case Stack.ANGULAR:
      return "angular_icon.png";
    case Stack.REACT_NATIVE:
      return "react_icon.png";
    default:
      break;
  }
}
