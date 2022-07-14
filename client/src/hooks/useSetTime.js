// Provide interval in minutes, start time and end time in HH:MM format
// and it returns an array with the time slots

function useSetTime(interval, startTime, endTime) {
    var times = []
    var startTimeHours = parseInt(startTime.toString().slice(0,2))
    var startTimeMins = parseInt(startTime.toString().slice(2, startTime.length))
    if (startTime > endTime) {
        var message = "Start time cannot be higher than the End time"
        return message
    }
    while((startTime + interval) < endTime ) {
        times.push(String(startTime))
        if (startTimeMins + interval < 60) {
            startTimeMins += interval
        }
        else {
            startTimeMins = (startTimeMins + interval) - 60
            startTimeMins < 10 ? startTimeMins = '' + 0 + startTimeMins : startTimeMins = startTimeMins
            startTimeHours += 1
        }
        var newTime = '' + startTimeHours + startTimeMins
        startTimeMins = parseInt(startTimeMins)
        startTime = parseInt(newTime)
    }
    times = times.map(time => time.slice(0,2) + ':' + time.slice(2,time.length))
    return times
}

export default useSetTime
