function solve(area, vol, obj) {
    let a = JSON.parse(obj);
    function calculate(obj) {
        let areaObj = Math.abs(area.call(obj));
        let volumeObj = Math.abs(vol.call(obj));
        return {area: areaObj, volume: volumeObj}
    }
    return a.map(calculate);
}
