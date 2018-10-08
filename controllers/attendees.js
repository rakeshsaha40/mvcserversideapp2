const allPeople = require('../models/people.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function listAttendees(request, response) {
    // Store the value of the `q` GET parameter in the
    // `query` variable.
    
    const query = request.query.q;
    
    var i;
    const filterPeople = [ ];
    
    if(query != null) {  var lowerQuery = query.toLowerCase(); }
    
        for(i = 0; i < allPeople.length; i++) {
        
            filterPeople.push(allPeople[i].toLowerCase());
         }
    
        
        if(filterPeople.indexOf(lowerQuery) != -1) { 
        
            while(allPeople.length > 0) {
            
                allPeople.pop();
             }
            allPeople[0] = query;
        }
    

    
    const contextData = {
        title: 'List of attendees',
        peopleMatchignQuery: allPeople,
    };
    
    response.render('attendees', contextData);
}

module.exports = {
    listAttendees,
};
