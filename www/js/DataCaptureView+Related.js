"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <amd-module name="scandit-cordova-datacapture-core.DataCaptureView+Related"/>
// ^ needed because Cordova can't resolve "../xx" style dependencies
const Serializeable_1 = require("scandit-cordova-datacapture-core.Serializeable");
class PrivateFocusGestureDeserializer {
    static fromJSON(json) {
        if (json && json.type === new TapToFocus().type) {
            return new TapToFocus();
        }
        else {
            return null;
        }
    }
}
exports.PrivateFocusGestureDeserializer = PrivateFocusGestureDeserializer;
class TapToFocus extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'tapToFocus';
    }
}
exports.TapToFocus = TapToFocus;
class PrivateZoomGestureDeserializer {
    static fromJSON(json) {
        if (json && json.type === new SwipeToZoom().type) {
            return new SwipeToZoom();
        }
        else {
            return null;
        }
    }
}
exports.PrivateZoomGestureDeserializer = PrivateZoomGestureDeserializer;
class SwipeToZoom extends Serializeable_1.DefaultSerializeable {
    constructor() {
        super();
        this.type = 'swipeToZoom';
    }
}
exports.SwipeToZoom = SwipeToZoom;
