// var my_news = [
//     {
//         author: 'Саша Пушкин',
//         text: ' Я помню...'
//     },
//     {
//         author: 'Колесо обозрения',
//         text: 'Меня снесли в пункт стеклотары'
//     },
//     {
//         author: 'Бродяга',
//         text: 'Бананов не надо а'
//     }
// ];

var my_news = [];

var News = React.createClass({
    render: function(){
        var data = this.props.data;
        var newsTemplate;

        if( data.length >0 ){
            newsTemplate = data.map(function(item, index){

                return (
                        <div key = {index}>
                        <p className="news__author">{item.author}: </p>
                        <p className="news__text">{item.text}</p>
                        </div>
                );

            });
        } else {
            newsTemplate = <p>Новостеей нет </p>;


        }


        return (
                <div className="news">
                {newsTemplate}
            <strong>Всего новостей: {data.length}</strong>
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
            <News data={my_news} />
            <Comments/>
            </div>
                );
    }
});

ReactDOM.render(
   <App />,
    document.getElementById('root')
);
