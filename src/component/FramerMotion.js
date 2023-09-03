import { motion } from "framer-motion"
import styled from 'styled-components';
const StyledText = styled.p`
    font-family: 'Satisfy', cursive;
    text-align: center;
    color:white;
`;
const FramerMotion = ({ text }) => {
    return (
        <div>
            <motion.p
                animate={{ opacity: 1, scale: 0.8 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ scale: 1.0 }}
            >
                <StyledText>
                    {text}
                </StyledText>
            </motion.p>
        </div>
    )
}
export default FramerMotion