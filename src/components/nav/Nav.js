import React from 'react';
import './Nav.scss';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    let {pathname} = useLocation();

    return (
        <nav className="navigation">     
            <Link to='/' className="navigation__home">
                    <img src="/logo192.png" alt="Covid Logo" className="navigation__logo"/>
                    <span>COVID-19</span>
            </Link>

            <div className="navigation__links">
                <ul>
                    <li>
                        <Link to="/" className={pathname === '/' ? 'active' : ''}>
                            <span className="icon">
                                <img alt="Worldwide Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADPElEQVRoge2ZO2hUQRSGZ8xD2GwgicEQsBckBLUw0VIhCkrAKPZiYkBFQRBrNaD4IImNaKloJ0nUSjAimlYLRUmw8JlY+IK8QCGfxe7iuffO7My9u9mI3L8a5vzn7P/f2fuYM0qlSJGiZAAaqA3NHQY+AO+BQ6FYLaArq9IAoBUYAJ4BGTF/kiiOi3gGmADOAa0rIbwRuAos5sX1ithG4LfBwC+gXfD68/MLwDDQWCnxB4AvQthnoFrEnxjEFzAueDXAjIjNAPuWU3g1cMEg6rzgdBYRX8A2wb9kiF8HasotfjUwZhG0XvDueBi4JfgbLJxRQg+FUsRXA/ctP/Ra8OqBeQ8Ds0CdyJu08MaAKpe+VR4eLiul9lhiD8V4l1IqY+FJZJVSOy01JLqVUhc96tkB7Hdczd2Ce8Pj6hdwTeR1O7g9ScWvIfi0MaFZ8N/GMDAl8tY6uDNAUxIDw47CHwW3CViKYWAJ8dwHPjn4QzadxnuA3Nuxz+HxuRhvVkrF+TTQ+ZwCXjj4/cC6GPVTpEgM4LTnjbhF5EzEuIELmBD5HZ45p8J6TTfxJk+vc2Jc732FzDlzVlYQEW0mA22excppYNYzJ6LNZKDZMGdCOQ3Me+ZEtJkMNHgWW4kViGx6TAZIIKZSiGgzGfjpWSwrxr5XUELm+K7gj/CEycBXz2LlNFBnZQXxLTxhMvDKs9hKrMDL8ITJgOvDqoByGshaWUH4akuRoiSQaxkuOD6s7gn+jgQfc9tF/gMHd5G4GxpgyFG01C1lg8h3bSkHk6xCE8HWnwlJN/WTIs9nU2/tm1r7Qlrr70qpYw6fHWI8bmVFIbmdDu4RrXXkDVxA0caW1vquUqrY8nWJsa1BZYLkdllZSl3RWo/EqBsFUIW9L/pG8LLAnMffJ9xanLLwRvFoLfqaqM0XNEE2d297GLgp+Lbm7gjlau6KH6si114PP21ke91nb7tV8CvTXg8Z6QGmxQ9OEzzgeFxE/CPBqyHYupwG9i6b8JCJBmCQvy+7PhFrx37E1CZ48ohpEPFeqBiAFuAM8JTgId8Jg4GjIp4hdzB4FmipuPAwMB+z9pI7Yn0HHAzF/o1j1hQp/gP8AWRtppLqrPu4AAAAAElFTkSuQmCC" />
                            </span>
                            <span className="title">
                                Worldwide
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/continents" className={pathname === '/continents' ? 'active' : ''}>                            
                            <span className="icon">
                            <img alt="Continents Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABnklEQVRIie2WPUscURRAzxM/QBa1S36BElIKZpEIQkBrkRT+i3RJoWAhmM5gKxgQbGwFCztJCltTGMymCgkkQghJREGNx2JXXWR2Zt/sbEDwlPPevefeO28eA/fcE4k6rP5Ut9RH6nP1Ybul/epnbzhTL9R9tadd0l5128bM1u/vLEhaAjaB8YTlNeAxMFiEq15aVj+ldDpVtLCkLqrnKVLVZ0UJe9UX6mGGUPVE7Siiw3n1exPCK47U1s6ROh0hvKLSKF9T1dSqfhlZ6wfgXWTMtXBYfaXu5eg26dNqSjqk/s0h1OqV2ZWWP/HEqd3ADlDKVTX8A0KUWO0DNoAHOaW7QDmEcBoVpS7lHG89C9Hlqh/Vr+rvFsSn6mSaJ+kdrwETwOvoqm/oAmYzdyWhPmlx3H/UsUb5U0+e+gsYyFV5lW/AYAjh+PZC1gV+nvDsELjIiPsCvAeeJkkzqY37wOrvy5y6qo6oM+obdT1hxMvN5E4ddU3eAwyEEH40WH8LdAP9QAWYCyEcRfSXD7VPXVFH2y67JR5Vy/9Veie5BHzBCGFbm4THAAAAAElFTkSuQmCC" />
                            </span>
                            <span className="title">
                                Continents
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/countries" className={pathname === '/countries' ? 'active' : ''}>                            
                            <span className="icon">
                                <img alt="Country Icon" src="data:image/png;base64,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" />
                            </span>
                            <span className="title">
                                Countries
                            </span>  
                        </Link>
                    </li>
                    <li>
                        <Link to="/vaccine" className={pathname === '/vaccine' ? 'active' : ''}>                                                        
                            <span className="icon">
                                <img alt="Vaccine Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACVUlEQVRogd2Zv07cQBDG5yhAiBpEuhQUSJzSkI6Sdws8EUUUJJCQTuKggYsoUyRBSt7h9KO4WWUZr9drE3nn+KqzvV5/3/y150ScAtgDboA5sFebzyAAu8AD//AEfKjNqxfUE48q4NH8Xg/PGE88AfuJc/49A9ylrJ/wUsMzG+NSHYbJZPJXRE5FZCEiUxG5dB1mavlFm+VLPOMCwEfgR65auc8Z4AD4qQSvc5Z34xklcheanRFxBex0kTXX57VEBAJoTrwS0bI2V8nGFZIgFgu6jkWYe14VgKqhlXp4CSHgEHiOBNfr9j1CxF6LRXwzHvQjomXNQo9jEV+BbT0/Z+w34lR8d6wNYr5bEaORbiHWEAFsAedK9Bk4AzYTYkI4uRVxQRNn5l43za5LxB/gGDjR49+JPao3u2ROaDgFEVM991nP/UrsU7XZ5d5cQ/Ie6/FURQF8aRFRpcRmq1Mk5EQ9EURcAFteRHQ2KlbVycKViNgTubfVTRUTl103IsLDBw8KEvfsj8E/PDxXnWKBtwX7uPBEWxiFD6dZ4T5+c6JgHzci7PdENozMPn5EmGvZMDJrq4n4LwNlHFSnNw+UPXliPfuEEigZKLvpE72H2NFA+V5Elm3rlPSlrIbOCxE51XvHxVusWTUnEmQGVavqOWHIDKpWnj1RXK1ceUIJ9f77y5UnIlJJIXpt0Py2CnpYvlf+VAFwBCw7LF9voFwCQ3iZIB4LG3+gXAKalecTzV5Stxp1oS03XFveIuEJ31ZP4V2IEBHRkPFZefoAmLFqgusrQkReAM2615DbuoY6AAAAAElFTkSuQmCC" />
                            </span>
                            <span className="title">
                                Vaccine
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span className="icon">
                                <img alt="About Icon" src="data:image/png;base64,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" />
                            </span>
                            <span className="title">
                                About
                            </span>                            
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav;
