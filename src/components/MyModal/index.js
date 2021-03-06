import React from 'react';
import {Modal, View, Text, TouchableOpacity, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import globals from '../../lib/globals';
import {styles} from './styles';

const MyModal = (props) => {
    const {
        modalType,
        title,
        message,
        visibility,
        setModalVisible,
        textInput
    } = props;

    let button;

    if(modalType === globals.MODAL_TYPE.confirmation && title === 'Are you sure?') {
        button =
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: globals.COLORS.blue,
                        width: '50%',
                        height: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomLeftRadius: 15,
                    }}
                    onPress={() => setModalVisible(!visibility)}
                >
                    <Text>{globals.MODAL_BUTTON_TEXT.yes}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: globals.COLORS.lightBlue,
                        width: '50%',
                        height: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottomLeftRadius: 15,
                    }}
                    onPress={() => setModalVisible(!visibility)}
                >
                    <Text>{globals.MODAL_BUTTON_TEXT.yes}</Text>
                </TouchableOpacity>
            </View>
    } else {
        button =
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => setModalVisible(!visibility)}
            >
                <Text>{globals.BUTTON_TITLE.okay}</Text>
            </TouchableOpacity>
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={visibility}
            onRequestClose={() => null}
        >
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={{ width: '100%', hight: '100%'}}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                            {
                                !textInput ? (
                                    <Text style={styles.message}>{message}</Text>
                                ) : (
                                    <TextInput
                                        autoCorrect
                                        autoFocus
                                        textContentType='name'
                                        placeholder='Add your name'
                                        autoCapitalize='none'
                                        style={{
                                            fontSize: 20,
                                            alignItems: 'flex-start',
                                            paddingTop: 20
                                        }}
                                    />
                                )
                            }
                        </View>

                        <View style={{width: '100%', height: '35%'}}>{button}</View>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

MyModal.proptypes = {
    modalType: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    visibility: PropTypes.bool.isRequired,
    setModalVisibility: PropTypes.func.isRequired,
    textInput: PropTypes.func
};

export default MyModal;
