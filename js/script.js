jQuery(document).ready(function($){
    
    const aRequest = axios.get('http://csc225.mockable.io/consoles');
    
    aRequest.then(function(load){
        console.log(load);
        const consoles = load.data;
        const consolesHtml = consoles.map(function(cnsle){
            const { id, name, image } = cnsle;
                
            return `
            
                <div data-id="${id}" class="media my-5 hover-background-gray cursor-pointer">
                
                    <img src="${image}" height="128px" width="258px" alt="image of ${name}">
                    
                    <div class="media-body">
                        <h5>${name}</h5>

                    </div>
                    
                </div>
               
            `;
            

        }).join('');

        $('#consoles').html(consolesHtml);
        console.log(aRequest);
    });
    
    jQuery('#consoles').on('click','.media', function(){
        const id = $(this).attr('data-id');
        
        const cnsleUrl = `http://csc225.mockable.io/consoles/${id}`;
        axios.get(cnsleUrl).then(function(load){
            const { id, name, image } = load.data;
            $('#console').html(
                `
                
                <div class="card text-center centerCard" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="image of ${name}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            
                
                
                `
            );
        }).catch(function(error){
            alert('ERROR!');
        });
    });
    


});
