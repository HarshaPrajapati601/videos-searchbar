import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/Youtube';
import VideoList from './VideoList';

class App extends React.Component{
    state={
        videos: [],
        videoSelected: null
      }
      onSubmitForm = async (textRecieved) => {
     const response =await youTube.get('/search',{
           params:{
               q: textRecieved
           }
       });
       this.setState({
           videos: response.data.items
       })
    }

    onClickVideoItem = (detailsRecieved)=>{
      this.setState({videoSelected:detailsRecieved})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSubmitForm}/>
                <VideoList listOfVideos={this.state.videos} onClickVideoItem={this.onClickVideoItem} />
            </div>
        )
    }
}
export default App;