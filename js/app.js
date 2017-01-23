var News = React.createClass({
    render: function(){
        return (
            <div className="news">
                К сожалению новостей нет
            </div>
                );
    }
});

var Comments = React.createClass({
    render: function(){
        return (
            <div className="comments">
                Нет новостей - нечего комментировать...
            </div>
                );
    }
});

var App = React.createClass({
    render: function(){
        return (
            <div className="app"> Привет я компонент App я могу отображать новости
            <News />
            <Comments/>
            </div>
                );
    }
});

ReactDOM.render(
   <App />,
    document.getElementById('root')
);
