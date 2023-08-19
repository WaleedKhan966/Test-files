

/// <reference types="cypress" />

describe('Weather Status for cities', () => {

    var temp="";
        
        context('API Weather Automation ', () => {
          it('Weather Status Tel Aviv ', () => {
    
            it('Creating csv file', () => {
      
              cy.writeFile('WeatherStuts.csv',' City | Temp  | daylight')
    
            });
    
    
              cy.request({
                method: 'GET',
               
                url: 'https://api.openweathermap.org/data/2.5/weather?q=Tel-Aviv&appid=d5d488734cf8d0f4c14613f56cfa2f36', // this line call from cypress.json file because the url are repeating so we add url on cypress.json file
                // qs: {
                //   _id: '800'
                // }
              })
                .should((response) => {
                   
                    //cy.log("City :"+JSON.stringify(response.body))
                       expect(response.status).to.eq(200);
                       cy.log(response.body.base)
                       expect(response.body.base).to.eq("stations");
                        cy.log(response.body.name)
                   // cy.log("City :"+JSON.stringify(response.body.name))
                //     cy.log("temp :"+JSON.stringify(response.body.main.temp))
                   cy.log("Weather Status :"+JSON.stringify(response.body.weather[0].description))
                //     var s1 = response.body.sys.sunrise
                //    var s2 =response.body.sys.sunset;
    
                //    const sunrise = new Date(s1)
                //    const time1 = sunrise.toLocaleTimeString()
                   
    
                //    const sunset = new Date(s2)
                //    const time2 = sunset.toLocaleTimeString()
                   
                //    cy.log("Sunrise Time :"+time1)
    
                //    cy.log("Sunset  Time :"+time2)
                  
                //    var daylight =s1-s2;
                //    const rawDate = new Date(daylight)
                //    const time3 = rawDate.toLocaleTimeString()
                //     cy.log("daylight :"+time3)
                //     const long = new Date(response.body.dt-s1)
                //     const time4 = long.toLocaleTimeString()
      
                //     cy.log("shortest Day light city time is:"+time4)
                //     cy.log("temp the shortest day time city is: "+JSON.stringify(response.body.main.temp))
      
                });
      
            });
          });
      });

    ///////////////////////////////////////////////