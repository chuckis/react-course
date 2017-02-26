var my_news = [
    {
        author: 'Саша Пушкин',
        text: ' Я помню...',
        bigText: 'Чудное мгновенье, передо мной'
    },
    {
        author: 'Колесо обозрения',
        text: 'Меня снесли в пункт стеклотары',
        bigText: 'А его этот мост не построят николы'
    },
    {
        author: 'Бродяга',
        text: 'Бананов не надо а',
        bigText: 'Дайте лучше наличных:)'
    }
];

//var my_news = [];

var News = React.createClass({
 //   var counter
    propTypes: {
        data: React.PropTypes.array.isRequired //валидация новостных данных
        },

 getInitialState: function(){
        return {
            counter: 0
};
},

    render: function(){
        var data = this.props.data;
        var newsTemplate;

        if( data.length >0 ){
            newsTemplate = data.map(function(item, index){
                  return (
                          <div key ={index}>
                          <Article data = {item}/>
                          </div>
);
            });
        } else {
            newsTemplate = <p>Новостеей нет </p>;


        }

        return (
                <div className="news">
                {newsTemplate}
           <strong  className = { 'news__count' + (data.length > 0 ? '' : 'none')} >Всего новостей: {data.length}</strong></div>
        );
    }
});

var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
})
},
    getInitialState: function(){
        return {
            visible: false,
            rating: 0
};
},

    readmoreClick: function(e){

        e.preventDefault();
        this.setState({visible: true});

},

    render: function(){
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

console.log('render', this);

        return (
            <div className = "article">
                <p className = "news__author"> {author} : </p>
                <p className = "news__text"> {text} </p>
                <a href="#" onClick = {this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}> Подробнее </a>
                <p className={'news__big-text ' + (visible ? '': 'none')}> {bigText} </p>
             </div>

                );
}
});

var Add = React.createClass({
    getInitialState : function(){
        return {
            btnIsDisabled: true
};
},
    onChangeHandler: function(e){
        this.setState({myValue: e.target.value});
    },

    onCheckRuleClick: function(e){
        this.setState({btnIsDisabled: !this.state.btnIsDisabled});
},
    componentDidMount: function(){//ставим фокус в инпут
        ReactDOM.findDOMNode(this.refs.author).focus();
},

    onBtnClickHandler: function(e){
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        alert(author + '\n' + text);
},
    render: function(){
        return (
            <form className = "add_cf">
                <input
            type = 'text'
            className="add__author"
            defaultValue=''
            placeholder = "Ваше имя"
            ref='author'
                />
                <textarea
                className='add__text'
                defaultValue=''
            placeholder="Текст новости"
                ref='text'></textarea>

                <label className=''add__checkrule>
                <input type='checkbox' defaultChecked={false} ref='checkrule' onChange = {this.onCheckRuleClick}> Я согласен с правилами
            </input>
            </label>

            <button
            className='add__btn'
            onClick = {this.onBtnClickHandler}
            ref='alert_button' disabled={this.state.btnIsDisabled}>показать алерт </button>
                </form>

                );
        }
});


var App = React.createClass({
    render: function(){
        return (
            <div className="app"> <h3>Новости</h3>
                <Add />
            <News data={my_news} />
            </div>
                );
    }
});


ReactDOM.render(
   <App />,
    document.getElementById('root')
);
