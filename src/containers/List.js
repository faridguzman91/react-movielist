import React, { Component } from 'react';


class List extends Component {
   constructor() {
       super()
       this.state = {
           data: [],
           loading: true,
       };
   }

   //mounten en renderen
   async componentDidMount() {
            const movies = await fetch('../../assets/data.json');
            const moviesJSON = await movies.json();
    //setState als request foutief is, remain true, laden
            if (moviesJSON) {
                this.setState({
                    data: moviesJSON,
                    loading: false,
                });
            }
        }

        render() {
            
                 return <Card />
                 const { data, loading } = this.state;
            
                 if (loading) {
                    return <div>Loading...</div>
                }
            
                 return data.map(movie => <Card key={ movie.id } movie={ movie } />);
               }
           }
           
           export default List;



