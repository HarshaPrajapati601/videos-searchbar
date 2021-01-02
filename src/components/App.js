import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{
    state={
        videos: [],
        videoSelected: null
      }
      componentDidMount(){
          this.onSubmitForm('cats');
      }
      onSubmitForm = async (textRecieved) => {
     const response =await youTube.get('/search',{
           params:{
               q: textRecieved
           }
       });
       this.setState({
           videos: response.data.items,
           videoSelected: response.data.items[0]
       })
    }

    onClickVideoItem = (detailsRecieved)=>{
      this.setState({videoSelected:detailsRecieved})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onSubmit={this.onSubmitForm}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.videoSelected} />
                        </div>
                        <div className="five wide column">
                            <VideoList listOfVideos={this.state.videos} onClickVideoItem={this.onClickVideoItem} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;