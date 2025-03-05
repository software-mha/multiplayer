export const messageType = {
    // Updates
    update_room_data: 1000,
    update_player_data: 1001,
    update_master_client: 1002,
    update_room_properties: 1003,

    // Get Request
    get_room_data: 2000,
    get_player_data: 2001,
    get_all_player_data: 2002,
    get_ping: 2003,

    // Send Request
    send_to_other: 3000,
    send_to_all: 3001,
    send_to_specific: 3002,

    // Connection Request
    player_join: 0,
    player_leave: 0,
    player_joined: 0,
};
