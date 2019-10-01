import React, {Component} from 'react';
import ImageView from "../../components/ImageView/ImageView";
import styles from './ImageViewGroup.module.css';
import PropTypes from "prop-types";
import classNames from 'classnames';

class ImageViewGroup extends Component {
    static defaultProps= {
        icons: [],
    }
    static propTypes= {
        icons: PropTypes.array,
    }

    render() {
        const {icons}= this.props;
        return (
            <div className={styles.group}>
                {
                    icons.map(icon=>{
                        const {img, name, onClick, shape}= icon;
                        return (
                            <div className={classNames({'clickable': !!onClick})} onClick={onClick? onClick: ()=>{}}>
                                <ImageView img={img} shape={shape}/>
                                <br/><br/>
                                {
                                    icon.name&& (<span>{name}</span>)
                                }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default ImageViewGroup;