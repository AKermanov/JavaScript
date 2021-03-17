function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', function(e) {
        let value = document.getElementById('days').value

        let hours = value * 24 

        let minutes = value * 1440

        let seconds = value * 86400

        document.getElementById('hours').value = hours
        document.getElementById('minutes').value = minutes
        document.getElementById('seconds').value = seconds
    })
    
    document.getElementById('hoursBtn').addEventListener('click', function(e) {
        let value = document.getElementById('hours').value

        let day = value / 24 

        let minutes = value * 60

        let seconds = minutes * 60

        document.getElementById('days').value = day
        document.getElementById('minutes').value = minutes
        document.getElementById('seconds').value = seconds
    })

    document.getElementById('minutesBtn').addEventListener('click', function(e) {
        let value = document.getElementById('minutes').value
        
        let seconds = value * 60

        let hours = value / 60
        
        let day = hours / 24 


        document.getElementById('days').value = day
        document.getElementById('hours').value = hours
        document.getElementById('seconds').value = seconds
    })
    document.getElementById('secondsBtn').addEventListener('click', function(e) {
        let value = document.getElementById('seconds').value
        
        let minutes = value / 60

        let hours = minutes / 60
        
        let day = hours / 24 


        document.getElementById('minutes').value = minutes
        document.getElementById('hours').value = hours
        document.getElementById('days').value = day
    })
}
