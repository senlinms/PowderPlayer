import alt from '../../alt';
import modalActions from './actions';


class modalStore {
    constructor() {
        this.bindActions(modalActions);

        this.open = false;
        this.data = null;

    }

    onOpen(type, data) {
        this.setState({
            open: true,
            data: data
        });
    }

    onClose() {
        this.setState({
            open: false
        });
    }
}

export
default alt.createStore(modalStore);