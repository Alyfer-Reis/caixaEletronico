import { useError } from "../../context/useError";
import Icon from "../../icons";
import { StyledError } from "./style";

export default function Error() {
    const { error, success } = useError()

    return(
        <StyledError>
            {error && 
                <article className="warning error">
                    <Icon.Warning />{error}
                </article>
            }
            {success && 
                <article className="warning">
                    <Icon.Like />{success}
                </article>
            }
        </StyledError>
    )
}