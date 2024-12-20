export function getLineColor(type: string) {
    switch (type) {
        case "tool":
            return "green";
        case "data":
            return "blue";
        case "control":
            return "red";
        case "other":
            return "black";
        default:
            return "black";
    }

}