import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchChallenges } from '../actions/challenges'

interface challengesProps {
    fetchChallenges: () => []
}

function Challenges(props: challengesProps): JsxElement {
    useEffect(() => props.fetchChallenges, [])
    console.log(props.challenges)

    return <div>Challenges</div>
}

function mapStateToProps(state) {
    return {
        challenges: state.challenges
    }
}

export default connect(mapStateToProps, { fetchChallenges })(Challenges)