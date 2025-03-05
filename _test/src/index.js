import Client from "./client/client";

const MultiClient = {
    Client:Client
};

Object.freeze(MultiClient);

window.MultiClient = MultiClient;

export default MultiClient;