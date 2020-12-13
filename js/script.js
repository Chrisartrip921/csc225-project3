jQuery(document).ready(function($){
    
    const aRequest = axios.get('http://csc225.mockable.io/consoles');
    
    aRequest.then(function(load){
        console.log(load);
        const consoles = load.data;
        const consolesHtml = consoles.map(function(cnsle){
            const { id, name, image } = cnsle;
                
            return `
            
                <div data-id="${id}" class="media my-5 hover-background-gray cursor-pointer">
                
                    <img src="${image}" height="128px" width="258px" alt="Photo of ${name}">
                    
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
        alert('I have been clicked');

    });
    


});
