const config = require('../config');

class PortfolioApiUtil {
    constructor() {
      this.baseUrl = config.portfolio_api_baseUrl + '/items'
    }
  
    getPortfolioById(id) {
      return fetch(this.baseUrl + '/' + id)
        .then(response => {
          if (!response.ok) {
            throw new Error('error in the request. Status: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          const portfolioUser = {
              firstName: data.first_name,
              lastName: data.last_name,
              phone: data.phone,
              portfolioDescription: data.portfolio_description,
              portfolioSummary: data.portfolio_summary,
              profileImage: data.profile_image,
              professionalSummary: data.professional_summary,
              userEmail: data.user_email,
              xUserName: data.x_user_name,
              fullName: data.full_name,
              idUserPortfolio: data.id_user_portfolio
          };
          return portfolioUser;
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }

    putPortfolio(portfolioUser, id) {

        const portfolioUserDB = {
            first_name: portfolioUser.firstName,
            last_name: portfolioUser.lastName,
            phone: portfolioUser.phone,
            portfolio_description: portfolioUser.portfolioDescription,
            portfolio_summary: portfolioUser.portfolioSummary,
            profile_image: portfolioUser.profileImage,
            professional_summary: portfolioUser.professionalSummary,
            user_email: portfolioUser.userEmail,
            x_user_name: portfolioUser.xUserName,
            full_name: portfolioUser.firstName + ' ' + portfolioUser.lastName,
            id_user_portfolio: id
          };

        return fetch(this.baseUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(portfolioUserDB)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('error in the request. Status: ' + response.status);
          }
          return response.json();
        })
        .then(data => {
          return data;
        })
        .catch(error => {
          console.error('There has been a problem with your put operation:', error);
        });
      }
    }

  module.exports = PortfolioApiUtil;    