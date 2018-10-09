const allPeople = require('../models/people.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function listAttendees(request, response) {
    // Store the value of the `q` GET parameter in the
    // `query` variable.
    
    const query = request.query.q;
    
    var i;
    var filterPeople = [ ];
    var lowerQuery;
    
    if(query != null) { lowerQuery = query.toLowerCase(); }
    
        for(i = 0; i < allPeople.length; i++) {
        
            filterPeople[i] = allPeople[i].toLowerCase();
         }
    
        
        if(filterPeople.indexOf(lowerQuery) != -1) { 
            
            var tempPeople = [ ];
            
            tempPeople[0] = allPeople[filterPeople.indexOf(lowerQuery)];
            
            const contextDataResult = {
                title: 'List of attendees',
                peopleMatchignQuery: tempPeople,
            };
            
            response.render('attendees', contextDataResult);
            
        } else {
    
            const contextData = {
                title: 'List of attendees',
                peopleMatchignQuery: allPeople,
            };
            
            response.render('attendees', contextData);
        }
    
    
}

module.exports = {
    listAttendees,
};
