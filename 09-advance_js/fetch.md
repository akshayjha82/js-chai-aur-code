response = fetch("something",{we can also add object here if wanted})
            |                                           |            
            |                                           |
            |                                           |
            |                                           |
            |                                           |
            |                                           |
      data = something                                web browser/node sends network request
    isfullfilled=function()                                 |
    isRejected=function()                                   |
                                                            |
                                                            |
                                                  network request is either accepted or rejected
        
fetch asks for the data through the node /brwoser then they send a reqesut to network on which data is located ,the netwrk then either accepts or rejects the request to access data .If accepted then a response is send and the isFullfilled function is executed , which then transfers the response in form of data to data variable  that the fetch creates as soon as it is created .If the network rejects the request (which happens bcoz of neywork or some othe isseus) then the isRejected fuction is executed .

## NOTE:
if the error messge like 404,202 or some other response is send then that also means thar requst was accepted thus the isFullfilled fucntion is exected when no response is got then and then only is the isRejected is exected.

At the end the data variable has some data in it and that data is send to response varaiable in which we called fetch() now wecan use the data we got however we want.
