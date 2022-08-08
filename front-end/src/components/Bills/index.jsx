import { StyledBills } from "./style";
import Icon from "../../icons";

import OneReal from "../../img/1real.jpg"
import TwoReal from "../../img/2reais.jpg"
import FiveReal from "../../img/5reais.jpg"
import TenReal from "../../img/10reais.jpg"
import TwentyReal from "../../img/20reais.jpg"
import FiftyReal from "../../img/50reais.jpg"
import hundred from "../../img/100reais.jpg"

export default function Bills({money, setMoney}) {
    return (
        <StyledBills>
            <p>Selecione as notas:</p>
            <span>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 1)}>
                        <Icon.Minus />
                    </button>
                        <img src={OneReal} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 1)}>
                        <Icon.Plus />
                    </button>
                </div>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 2)}>
                        <Icon.Minus />
                    </button>
                        <img src={TwoReal} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 2)}>
                        <Icon.Plus />
                    </button>
                </div>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 5)}>
                        <Icon.Minus />
                    </button>
                        <img src={FiveReal} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 5)}>
                        <Icon.Plus />
                    </button>
                </div>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 10)}>
                        <Icon.Minus />
                    </button>
                        <img src={TenReal} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 10)}>
                        <Icon.Plus />
                    </button>
                </div>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 20)}>
                        <Icon.Minus />
                    </button>
                        <img src={TwentyReal} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 20)}>
                        <Icon.Plus />
                    </button>
                </div>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 50)}>
                        <Icon.Minus />
                    </button>
                        <img src={FiftyReal} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 50)}>
                        <Icon.Plus />
                    </button>
                </div>
                <div>
                    <button onClick={() => setMoney(money == 0 ? 0 : money - 100)}>
                        <Icon.Minus />
                    </button>
                        <img src={hundred} width={150} height={80} alt="notas" />
                    <button onClick={() => setMoney(money + 100)}>
                        <Icon.Plus />
                    </button>
                </div>
            </span>
        </StyledBills>
    )
}