const Card = (props) => {
    return (
        <div style={{ margin: '1em' }}>
            <img width="75" src={props.avatar_url} />
            <div style={{ display: 'inline-block', marginLeft: 10 }}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

let data = [
    {
        name: "JJ Jiang",
        avatar_url: "https://avatars2.githubusercontent.com/u/8136658?v=4",
        company: "Microsoft"
    },
    {
        name: "JJ Jiang",
        avatar_url: "https://avatars2.githubusercontent.com/u/8136658?v=4",
        company: "Microsoft"
    },
];

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card {...card} />)}
        </div>
    );
};

class Form extends React.Component {
    state = { userName: '' }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
            })
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    value={this.state.userName}
                    onChange={(event) => this.setState({ userName: event.target.value })}
                    ref={(input) => this.userNameInput = input}
                    placeholder="Github username" required />
                <button type="submit">Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        cards: [
            {
                name: "JJ Jiang",
                avatar_url: "https://avatars2.githubusercontent.com/u/8136658?v=4",
                company: "Microsoft"
            },
            {
                name: "JJ Jiang",
                avatar_url: "https://avatars2.githubusercontent.com/u/8136658?v=4",
                company: "Microsoft"
            },
        ]
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }));
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);