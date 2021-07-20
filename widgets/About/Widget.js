// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/About/common":function(){define([],function(){var d={_defaultContent:'\x3cdiv\x3e\x26nbsp;\x3c/div\x3e\n\t\x3cdiv align\x3d"center"\x3e\n\t\x3cimg id\x3d"img_1560482577021" src\x3d"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAYAAACunahmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDYtMTNUMDk6Mzk6MTYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA2LTEzVDA5OjQ3OjI4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTEzVDA5OjQ3OjI4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwNGM3MzkyLTExMDAtNDYwMC05NjU1LTkzNTRmMWI1YzMzYyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZiYTk1ZGMzLWVkMmItOTM0OC05OGNjLWZhODg0ZWYxM2IwZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmMyZmFmMGNlLTYwYmYtNDA3Zi04M2JkLWU4NTQ5YmMyNzQzOSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzJmYWYwY2UtNjBiZi00MDdmLTgzYmQtZTg1NDliYzI3NDM5IiBzdEV2dDp3aGVuPSIyMDE5LTA2LTEzVDA5OjM5OjE2KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzA0YzczOTItMTEwMC00NjAwLTk2NTUtOTM1NGYxYjVjMzNjIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTEzVDA5OjQ3OjI4KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bmxXwAAAuvElEQVR4nOWdeZglVX33P+dU1d1vL7My+zDDLAzCsA6bOIJRQBCCGNf4GGPcosao4KvRF6K8SSQhvMRo5HF51cRXgxIVUCMogoNsww7DMDPMAszObL3fvkud8/5R26m6t/ve7ume7pn310/1rTp16tRZvue3naWE1prhyL7rkdi1EAIhIHhMCO9Xa+8IrkEjhAAEwTu8aw0IhPDCtdZ+miI6B5TWCIEfDlprpPTiua7GsiRCgOsqACxLopQCBFJ650opP57AdRVSSkAH8c60LHmtEOLSarWWd133FSHEfwK3AHuHrZSjlGpvOWfY+/II5WNCKQCdD7arbdt+1Latx4SQbwdRxKuHhcDngF3AfwIrJzDLE0LHPBh8rtRuWdZnLcvabVnW7UKIVRBwqTrOKIF3AE8DjwJ/fORyO7F0jIIh5AJLpLRutW37VcexbpRSHOeBQ/txInE3BK0CfgZsBz4FFMY96xNIxxAYYjrIm2zbujeddjbZtvVhIBXoHR4IPMVGiIacoRHNBW4G9gPfAJaMTxkmlo4BMOigkW0prb9wHHuDZVl3W5Z9kQcQZcSBQDx44BCGwtsSpYGPAJuAXwGrx7AgE05HMRhCLjDLtq0bbdven0o537Isa5l3T/mcQoSiwLv2zgOuEHCJUdClwP3AeuDPAefwyjPxdNSBwWtMDYgzLMv6SSqV2uU4zmdBt0cACGP7jU4sLOAKwXWLomIoOhH4Dp45+r+AmYeT2ETSUQOGoKGlFFc7jrPWtq3HLUu+zbvn+S4ivSB4JukPEQaYkiA5bOoEvgDsBn4EnDZmKR8hmuRgCHtvu2XZ19q2vdOyrNstS5wFoFSoL2D2bq01Onntx6vXEcYODUam3wk8CTwCXDXWLxgvmnRgCKx/vAZcJIT4hm1bexzb+kcpxGytNUr5je93/YgDGMAwxAKBFeGnG4RpHYBDj9dxNuifgn4F+AxQHJ9aGxuaVGAIqlDAasuyfu3Y1hZLWh8BmVFB79Y6wkH4YAIUmrCxPZCIKCx4kf8bxhnfYx5a34SnV9wKLB6H6jtsmkxgsCW8Twq5Tkp5v7TExeDpCoFgNxh/XZjW9WHCB0AYZgDCZBxHjLTOovWHgc14pukFR/DtTWmCwaARgplCiBukFPts2/qeFJwEoFVMzYs4AmZD6qi3C2GIgTotInYW+ZoSnOLI0qXAGjzT9H1MAtP0iIPB0PhPEUL+wLKsXVLKLwIdKlT8/NaJ/2CioREowrghRzBSM1p9Ytp+SDoR+B6eFfIlYMZEZeSIg0EIcaWU8mEhxDNSivd4eWjUyPGA5uHEFImYGEgChQgoRxQZ3pj8UHenAtcBe4AfAqceoVyFdKTAkBeCT0opXpJS/FwIcQ7EOjSxVmyp8VUUQNi0JJ+MaDLwg7jwGoIE8C7gKeBB4C3jnKmQxhsMx4P4VynlPiHkLcACL9hUtc0OnRARDUFhsn8jTHvXwZ9pWsTCGlyP3dEqtfzcecCdwCvApxnnUdPxAsNrhRB3CSG2CsHHgSxE7RP3+kWN37BPh2ajEcFnCl576pG11Vi3f+xoAojRY2ge8M/Aq8DXgONbemqENJZgEELwZ0KIdUKIB4QQl3vBjUvcXEQEz0UyNuzRxiOx8MRrYvEJ0q5/HkAw6gGrI0lZ4GPAVuC/gdePZeJjAYYCiOuFEPuEEN8F3zSs4wKNu0ByrMCMGnKJuttG4yfDdT0o6vA4Eo4+eekS4D7gOTzT9LDb8nAT+AiwD/Tf4mnDDamhuzh5P8nLDfEQ683mTKXgTgx12gBFMu4QYWjD+TCaI1GYw5AHo6DX4Jmm+4EbOIxR01GBQWts4JfAN7Qm07B3N37OvIqfhoBQjZ8NG04Yj3rxNea1/yuS4qBR/sahkYaVNuPKkjqBLwI78UzTU0aawGjAkMObKPpmM7C+9zemetGhjcFJU18wH4qSjLgBsYauYzw6ihveSyY3Zm3jJ9RU7TgieomFZ5o+gzdqemWrDzYFQ7D+IFjTAPwWOH2o+M10BDOewdmjI3Af6Aby32zoRHxzoCq4J7SIAoxnzTEL0zIZvZQIFo80i3fE6Wzg58BjwDXNItvNIjiO4y9CcdFaf10IcW6zZ+JTy2C4HhHGjUKiihNBn5fx+z5VNChXQc0F5YKrwLJwshksGc1/jB71xy8i1mGkOdLWSpap0fOJONrggkfWejkZ2NAsUlMwtLcXsSyL/v7+N/T1DfylZVkt56B1UHgMveG8EwGeXhCstIJqpQaVCtiSdC7DkvY8C7IpTm7LMaBcvvPyPvpdl7SIOq4/DTaescOiMHMMDSQzzkjujTmVgP5mkZqCoaenN1ie9nlzedxIqCkotACt0P7UtNhdvzPVhMYtVaCmmNZZ5G0nzOKSGR2c3VnkuHQ04Hft8y/TX60hpAjTins4g/fHQ0ZORi5brRIx5MWkoKZgqFZrAOcCbwjWPYIO5xSOhLTGmFmUfD5YwKlDLuAFC8qDFahUWXRcJ19cMpf3zJlGSsbf/Zv93fzxwy8w0DuAXcxhS/xh8EYtNYQuMrLSxAedhnpeGO+PxUk8PwmoKRh8pfHdyXCvYQ+HS0DYpYQ2u693LcDV4PYMkMunuenMk/jowsYm9M1bd/OZxzaAlKTacgitUb6FKjBNUp8biGSuR4qGZuLBjGPGa6RnTB5ANAUDMIchZuQcLpcAU3REJIBazUX1D/K6Bcdx+6plTE81nvtxw6YdXLd2A+TSZFIOSnv6hTZSixxLRJaIl4swbjMo1IOnxfLGok6uxk9SK2BYSZMVyYctOsymE4JKzYX+QT588kJuXXnCkM9+fdserntsI+SzpBwLpbVvMUQsWIf/4lnTYUBrHCEZa/I26eipFTDMbTWx0YJC+3a/QFBxXegr8cUzlnDDigVDPnPf/m4+/ugLkHFI2RKtTEshOKLNIwJQCAIIeKBxay5Ua+C6PoAE2BJhW0OUwAeZ0GF6yXvE9CJAJ8MNHWIUona8qBUwzBppoqPTJzQuGvoG+IsVC4YFQo+reP/aDaA1KcfBXDgTW2lviKCIBwhc7aJKFXAVIpdmXkeBKY6FENBVcXmlv4TbV/LaMJfxNvlImqOBGmKkHwtsVPQwPAmIFqrnCFArYGjdsWDQSLmEQKB6B7hg7nS+dcbSYeNev24bLx/owe4oGF5KHatf4kFheK00CK7i1NlT+fDxs3jT9A4W5TOx9HeUyty3r5tbX9rNQy/v9bwc+SxCkGz9WNqtlTQRa5IAAVoDQ+ORoxYp4hIwZMkFVEtVrHSKb565bNj0nuvu55YXd0AuDUrFO1voVDLeD2ghcAfLMFhl7sxObjllMVfPHnKQlbnZNO+dP4P3zp/Bb17t4qNPbmLLzn3obBqRTSMaDZMb4iPKTyAejPLrRtfDFvmI0RGZA9lsEEsBDFb40ooFLC9kh03r5hd3wEAZ25ZhWmGqhtEQvhtwewcopBz+9YKT2X7JqmGBkKQ3zuhg8yWr+NqFp1HIpNAHe1G1QL+IlTL8iUqZLGs9WCcTHdHZ0XFQ+CQEarDKrCkFPrFkzrDP7y1XuH3nPsim/Br3qz1Zx8FcCKFxe/q5cN4Mdl1xHh9fNHvUef/YotnsuuJ8Pnj6EqjWUN19nvUyTK9u3uaTCxUTsogmWjvhs9RKlY8snk2bM7zU+uWeg/T1DmA7FhECNNHQI4TzHgS43QO8acFMfrd6JcURjKkMRUXb4punLWHDFefz2kWzoG8A1VcyTFnTkiHMT1z5nFwAMGlCV1Rp7bm77UKW98xrvnbkN3sORU6juiO44ZmHtVKFKe15/uOcFWOe72XFHA+87lTueNMq5kxpQx/qRw1W0MLQYBN6y1ASYzLRxK+1HKzwxmntLG6iKwCs7+kDKxh/TExbC1ASDFtXq/zV0rnMSKfGLetXzJrKjsvO5cYLTsaxLfShHpRbi7iENlER5w7Cd4kLEex3OW7ZbJkmljP4/86b1t407vZSmc0DZbCsOps/1vOUplZzIZvm6tnTxzjHjemzS+ex64rzeffJi6FcRfX2e0aCFAgEEvzNTv2/wLmFiP1JUX8Em7AGT4wnTSgYlNKQslg9tfm2Bd3VGgPliteFNN7EBmMGU2xafNVlQT7L8rbc8GnWXNbs7+KXuw+w5tUuur0R2lHRtLTD/z1rOU+/5XzOmjcT3TuAO1AGBDJsTG9bIZMjQMAhGhx4DSQJQOEdMgTW2FIrfobxI6VIpVPMzaZH8bBuaKN7XELR7ljYQ/DeZ7r7uHnTdn6+cz89A4N4Q5yaYj7L5bOncc3S+ZzeObp9NVa2F1h74WnctmMff/XUi7x6oAeVz+D4A23C+I9/LhL51NEtI5auc1EQzNeAyOV+GDSxOoOrmJNJxSanDEVRvRjmpNZeQ5rzHP0qqap6X9m2/kGufHgdp975B/792c309A94u0I4Njg2vf0lfvTsFs646w9c/uCzbO0rjbpo75g7nZ2Xncv156xACkGlu4+aq3zWr4fmBgKk8DmCwSE8cZPgDgb3EKZYGWWeJxYMStPhWGStEWYjqZ6HYIg2dbCM3lZWis+t28KiO9Zw5/qXECkHq72AlXKwhEBKX0anHGRHARybX65/icU//z3XPruZcgNgtUK2FPzt8vm8fNk5vPXE+ahyhVJfCZc4qxeN/mI6Rr348EBgio8oXIwSFBNuTQzFyoenRnZacCgQMOC6DLiKu3btZ87P13Djw+tAa6z2PFKKyOpA151LSyA6CiAENz3yPLN/tobvvbRn1GWck03zX2edyEMXr+LUWVOo9vQzMFgG4RlHUhhcoBGXEBE4JAZXiOkWcY4RKq1ChCBpRhMOhpb7nCYUCTHPdnLhrQLLsXmlr8TMOx/gynse5UDvALKjiOXYhlhh2ENqhe3YyM4iB/sHeP9v1nLKPWtZe7Bn1GU9d0qRpy48je+tXsnUXJZSdz8lVxnzNRv9mT3eBMAQnCNIyeQWol4vaUQTDoaRUeTN89psKJVJo7Sib6AEmRRWLuMNLpnpDEMijKWRWuFk08j2PM/teJWz7/wDb39kHXsHK6MuxfvmzWD7pWdxzWknoJWmt7dEFY0lG4gEkQSKn8dEnBA4CTFicpxmdHSBIeZp9EERuLYT4QKwbBspRELJ1OEzyfWYJjs1e6Sng0CqLY/MpPjJum3M+/karl+/DXeU0+6zUvJPKxay5eKzuGLhcZRLFbpLZYQQHihi/gdTjJj6hu/DIBApkb+iEQdpRkcXGIBQxmvt+RoajQ82HGKOyKyWQOQI/0pgDEHrxDNa4ViCVEeBqqv48kPrOP4XD/LzXftGXZqFuTR3nLmE+1afwkmdRXp6S5RrKsElEgoljbiCb7T6CA5VU0N8NKOjDAwJCwIV4wh17ukhDjOO2ftN81X4hxceB5fQmkzaJt1ZYPuhPq66+1EuWvMUm3oHRl2y108tsm71yVy38nhKlSrdlSq2lDEO1Zg7ROEhZ/BBIEXcJG1GRxcYzDYNr3XEJXyOkOD+sbDEICcmKIK4ZrWZQAgcPqEo0ZpcPoNTzHHfll0su+sPfPKZzfTX3FEX8UtL5nDHeSvQCA4MVjxAGN7HeoUyER4TDyanaE5HERjqUFB/z/c11PMBkxMEHEUhfP1B6cR9HzWmty+YUC909C5vuYfCEYJ8ex7LtvjqkxuZ94sH+cbWXaMu6RUzOlhz/ok4lmB/uYojhcEdkm7ppG9BxIES6BXHrgKJgQsdx0JMUYxvBRz2bL/i3GrNG1TqL1HrHcB1oxlMInwhCUukUb68d2Vti3xHgUOlMn/5wNOc+tvHWbO/a1RFfW1nkTvPWgZa01V1sUTAIYiURobiDHFQRHxieDq6wFDHGXSD3k/IIUxdIvgVgFYKt7sXqjU+fNpSHr3qQj5w6hJ0uUq1qwdXqUjG6ijNCBS+WAl3e/GqWmsPOG2ZFLm2PM/sPcjqu9fy1kfW8/JAecSlvWR6O//7NQuolKsooX0QmM6leo4RcguTMxyTpiUAgV6gw9lSETbi5mWgSwg0CI/R13r7UT39nLdoLs9efSG3nrmCVVPb+fZZJ/HsWy9k9QnzUX0DlHv6cDF3nY9IGJzGawyfgxiWjQV0FLJkchl+tnkHJ/z3I1y3/iXK7shc2399/HFcPncaB/orMQvDex91oACG5BTN6CgDgw7bvuG9BmGBAqj6SuhDPRw/cwr/feVqHnzj2ZzcHh+ZPLmjyP1vOIvfXbmaU+bMwO3qpdxXwvt0aj1XimUmodQKPF0kIwWdbTmkgBue3MTiux/jP3fuH1Gp/2HZXHJpm96a8iwDzPkOcddzMFwecgoiUDSjowsMZu+PnTe4Vl6vVtUq6mA3hVyaf/2js9l6xWoumTVt2NdcOHMqz7z5fH54yXnM7ixSPdjN4GDZEwgJi0PEwGGCJsizx8HytsWUjgK7Bkq864FnuOCBZ3mqq+mWCQC8ppjlQwtm0F+uIGXcbyB8UyHpivbuAQbnaEZHDRgiBhyv/KGvQXX1gdJ85vyV7HvHm/j40vkjeue7Fs5mx1sv4uaLzqI9naZ8qIea60a9zJBKMYXTPzcVT0/aaKZm03QUc/xhz0FOv/cJ3v/UFg60MKnmQ/Om0Z5NU3K1MSjl+xcMbhFwiqT4ODb9DOG5wRES11prdLXCpcsXsv2dF3PTacvJjHSY3CcBfGrZQna87Q184swTqSpFxfVM06R561krJiCiNIIArb0ZRccVsrSlU3xv8w5OXvM8d77aPWw+TixkuWR6O12VqjHPITFQhcEpMMXFMedngJa5QqVGRy7LbRecxtxcpkE6I6eCbfHVM1dw1fzjqPWXotcFJ9q3bQJxBXHl01A2Bd7GRFlLMKc9z4Gqy5VrN3Hdi8P7Jq6Y0RGmUO9giho9mucQAUS2wBkmdtrbSEjjeQ5FvMLDe0Gl+zZeMA9grKndtsH1d78j0BEkBMvqQhK+1WmMNCbLIz0lc07GoaRsbtiwnZ6ayy0nzmv47vM6CxyXTTGolDchKCh3KLYECHN6nAidK62Mpx1FnCGy6ZPsObbaOmZijj2VlQoBF73XNxe10ezhIqHgN7wDQc/VXo/WQpCzLeYUcvzL5j18buPOhu9emE2xLJ+l3zWnzdV7HYOxiTjXOOZ0hkaWg3nuH2PPEOrz4J97nVNEPo8wThAfkpxMhh02DpSMFMwpZLhx826+u/NAw9cvzacpu27c89gIFAnRcezpDGGJEpwhvOfXvBo/zmC+0xv08t4VbEs1ZNZijiGPq0QDTd59LQRZW9Kecbhmww429A/WvXlG2okpiKF/AdOyMM3PuKNqODq6wNCEosUpNPZBjclL/H/a8PgbHsHgsKWgohSHKtVAPYglYXoIpYjmQmoNM1MOB6su/7OBQjnVsZFC+v6DaJyCwMtocomEqGhGxwwYxlMyxCgJMtOhE/RAARWl6EzZLGnLcXBg0DMJZXyWUvIv0CU0muNzae54tYdf74/PuWyzJbYAqQ2rAcP1HPADEQfrsScmGtIQxRwndIi6i8iMNJXE3oFBrpwzg02Xnsc3zj6Jdsdmb3c/Na2wAi+iqOcQ0u/ZKX8sJak79NYUCuEt3Queb6g/1J83o2MADI1UiXHUF5IiweT5CQqWAXxk8RxefPO5/NmyeewfKNNXVd6QtKHpm/wBPMNkdsZmzaE+1vdFukO36/qbJ3u5iCmIpl6S8D4eY2JCxM+NngUYypomHK0Zt6z4ayZjwIg3KojYZNkOx+a7ZyznG2cup6tcpeSq+IopEfXkYBAqJy32Vlx+d7A3TOdg1QWMSbJErum6tRIJC6MZHUVgaEJB+5sCfBwoYwWf4RSGwTKU0lqfh48sms2nls1j30DZ4AYGlyDOdfKW5EFjQOvlUoWCbXKVuNVgjlIm9YhmdBSBQccqW5jhJKtdMOi69B7GquqhaNdAGSyZ0NTrLQRE/Bs5Jl23fD4nTSlwsFoL05HhIaLeLQRttsUWf2JMVWu2lCoULTv+/nDoWhjioV6PaEZHERio72i+yzXODARWymGgVOYNdz/MEwe6xuTV2/tLXHbvWn69fQ/ZXM77sEkyQxJEWKOCgt1466AOx+Zdc6bT44PBG5aO5LoJrIwlOVRTlJRiXW+JVwYr5ELOQB1nCMSDkY2hVJo6OmrAMDuXYVo27X1opFGPM0osBNipFOt3vsqZt93Nnz30NN2V6qjeW1GK657ZyPwf38OvNr1MJuV4HzYJXylicjpQWUAzJzf0VgOrphTJ2hY131sZWRQixh1SQjCgFLvKVR7oGqCqwDH0i7iX0RAbSW4x+XUG7e3K0wJNSTms7GyHcsUroKkwhsqCX0u+q9duyyOyab6/dh1zb7ub723dPqLc3bljL8f/12+54YGnEEKQ6yhi+SZfWLnhPMjg2tsNH2mxvJgfMu3FuQzHpVNUVVI0xDmDLQVpKXngUD/3H+xlWtpOWApeg8eGtU1uQQSUZjSxYBCC0gjmBF41byYoTcChgx5gMkFh/AeNbdtY0zroGxzk/b9Yw+m/WMOzh4ZfPLuxu4/V9zzIlXfcx65DvaQ728mmnAiAWidfSzA0LRB0VWoc35bntdM6hnyHIwW2P0gRKH7mLi3RBFdosyT/tn0/LwyU6fD3tJbC0A/8zmCCI+aDiGd1SJpYMFiSV0oVdre4iPX9S+czb3onun/QEAtRUaNOGvVUjeetS2WzWJ3tPPXyLlb++B4+tnYdgwkgDroun3hsHct/fA9rNu/AaSuSy+eQwYCS8EcqpSnb4yqkJQR6sMKbZ00lP4TOALC/UqPPVTiBvyEco4j0gGA2NEJwqOaG+zYHymA4W5oIEGBYEIZF0QpNMBgsuvsHWd/b2g4pOSm5/vRlUK54HyoLC9lgdMinoCK09qaaO+1FRMrh3x5+htm3/ZrbXvb8//+xbSezb7ubrz38LNK2yLQHIsEcbcJXHBtZCV5v3l+u0lbI8ullC4YtS4zNGzqAJL5DSwCMvGXFltuFbu1QdyAcqAooOheT35qwpIBqjZ/uPtjyMx9YMp+3nrQYuvvRRvbriirM3mLc1RrHtkhNbedQ3wDvuechjrv9t7zvN49wqK9EemoHaceO5iuIeK9DeIAI5iIEg2MSqGmNKg3ytycvZlGTrQxDOR6kQ9S4JncwuUbI9oWRiJFWYzFhDGY1oYm3JtIpvr9tNzsH6odrh6IfX3QWpy2chTrQ5bWZ6QokOK2XlDHJAqTzGUin2dvVi5VOkcllvSV3JJIzFDJvNpGIbgqNJb0PqnUd6uHdyxbwqSZcAbxthmw/KWk0WOCCajTptbEPIc4hICkmhAHo4WnCwWClHfq7+viHdVtbfwb4w5tfy+uWLUQd6KJWqcVK26qM1BosIUmnU1hSRiIhSCMwF72QCEwGWqQQ9FZrdB/q5erlC/nBea19dbi35jKoNLbwmz/o/UHDGQAMABzMWUgqhyaHCONjiKKW+MIkAAMaKGb5+nMv8pOXd7f8WM6y+P3F5/I3F54J1Sq1Q724GoQ0mKKhUMYlRlz1A/DmMGojjh9PC2M6G542KjRSCqpac7Crn0rV5e/PW8ntrz21xWqHPeUKPbUaKSsCgeljaDx1LXlOjENAJNJC0RYCZZLrDB5pLNsCy+Ltv3uCX+0e2Wqjv1u5lBfecTGrly1A9/ZT7SuhQrnqzygCEmiI5kqKSDcIWIr3X4ZfDApBE7BiIejqLzHQW+LixXPZcOVqPr/i+BHl++meASKhEBdqMdkfngcZMHUJYvdj7ufEbys0CcCAN5s5mwE0l/3qIa5ft2VEjy9vL3D/G8/hzitfz4JpHbilir+nuK/gJSojgQtfHJhMNvmAr0hKQd9gld6DvSyd0sGvLj2fX7/+DJa1De1cakRlpfj9gR7a/E8heSOgkX8haJRGXkYZ6+0mj6svownto0JnCEkrZC4LKYcvr3mapXc9wEMjXM7+ljkzeOnqN/CWxbOp9g0YlRFpUFGd6FAAhwAwxIE3FK5D9l2uKXoP9JKzbW5afTobr3gdl84efpneUHTHnoM80dXH1JTjKY/SUAgBDHER4xIGy0/6EiIHlAivCZ9tjSYPGMADRMpCdBZ5cc8Bzv/Z/bzzoWc5NIJxhScOdPNCdx+knHh30Eb/iYmESL+I9R4fBDWt6e3pp1qu8r7TlrHt6ov4zIkjEwkmVZTiX7bsIi0lVtCAOjEXIRQFSVERv0cCEOYzUUFjpRyWJt8imsDHU8yhay63PbWRn23dyT+uWsEnlw5tsm3tG+Bja5/n1xu3Qcohncuiw51dBXULYoMKMu1IAytaCPr6y1Ctcc7COdx69kms7Gw77OJ9et02nujuZ1kx71upEQAkwUx/YTApX3EJlgD4C2WIOb+Mb3n68cKPB4aPN4fD5ACDPxRtzifUWiMsCVPaqJTK/PW9j/HVF17iAyfMZdXUDubmMgzUamzq6eeOHXv5yeZXcAfKyEIO27Y8ICRc04YmadSjjimJWghK5Sq6v8ScmVO5edVJvH3+iL/m2JA+t/4lvrFtD0vbcmh0NK0do+8GZU9Uj/AbPGjvMHKD72uOdtLf5ABDUCONRqa1RmTS6EyKrfu7+MLOfZC2IZ3y9nccGPTWLeQzOB1Fv7dHLmRR/+HrqNeIaGKMEJJKrUatd4BUMceXX38m16xYFNuDerTUXa3xsac388Od+zihmMMxnUdEq6cBX1yJaN2m3/raB6wHlAgEAZkMQxidy9+rpiUFcnKAYTjyQSIRkE1DNo2rFMGXz2Uhhy3rhUCriUshqSlFpacPpOS9py7jn08/kemZsfmCzbe27uLLG19h12CVpcUsjpRoBCJY+0CSM+iIUwpvcY4y2IGBj5jYiLDhV5jxEzzXjCYPGOoW0hIvgVFXtpT+ihNhMJT4knhTuQqmzIWdw5+qrrRgoH8QKlXOWTSHr686idOntI9JcX6z9yCff24rTxzsYVo+w7JiDoQ3bzKavBrpDFL4Kza18L6N6QMi+MxygIBQXIQ9P2j3CBSxqhuC4zaiSQIGga8++dcJ7Weop4ZjfUM86nUmyWCliu4dYMb0Tm45+zW8a+HoP3No0ou9A/zNc1u4ffurOI7N4vY8lhQorZDCCsciIiAYI5AEyp9AGRzC3Csq2bgN27pB4NFjTQyVU0M7rmMTsQKbCldkapmTaAUgpKTqutQO9iDyWb74utO47jVLcOTh6wX9NZcvr9/KzRtfoeYq5hRzpC3Ly4LvJg+8l6FZq8GWFlL6uoAQXnyh40PlZjUEJY6VPwGY8FrEeEczmiRgkN5nAIMt94QIRw9jHbzhNAJDkRIhw/TjB8qTwEVT7ekHNFe9ZjFfPfMk5ubHZiOP72/bxd88u5ldPf10FnO0553QkBEyMh0917jw58d4uZRSYEmJ65rf5gzKQwzM2tAdfDjFBtdaYxtD08SDQevwi3S6rx+dzyGDLXe0qQWL2E/0vBEQKFSGiaqQlEuDUK5w8vzj+Pqq13DBjCljkvXfv3qQa57axON7D5DKpJnrf7BEaY2U0rBYfHmvjXV1/q6vtmVFFm8wFmKgIaEVxJXExGmsGkZRnokHA+CWyly+cDZLMxY3P77BW29QyAUdnfrixSuioe4gBOVqDd07QNvUdm56/Rl8cHHjHVFGStsHBrnm6Y38eMsOkJLp7XlSQqICqyfm+fTyYu7AJoS3A5wlJSnHGbVfYAQUGC3D0qQAA0qxo+xy1zkreM/8WbznkefYsH0PWlrel+n93hOORGLa0gF5PaeGxi1XoTQIhRx/fe4p/MPKpaPe4Muksqv48rot3PT8FirlCm1teXKWBVqi8NY/RE4MP39CJHIJweYeTsrGkhKV+AZWIB5HSw2eDebbDkuTAgwik+Lpnfv5p007uHbpXF548/n84OXdfGX9Szy/ez+6UsK1Le9Lc5ZESOnvZeBp6SgXajWoeGsqch1tvHvFIv7HiuM5YZjp6iOhH720m2uf3MDOg91killmdBT9TVwCfSAhxgxMmLv7RK4gQTqVQuNvcu+rPnELO7ATE7pEzNs0TKajeweBph/FmBRgkICbdvjC+le4as40Tshn+NMFs/jTBbN44mAPP9u+lzX7DrGpt599pTKqUvU2/UZAyqaQSTE/18bpnR1cPGsqV8yb2fQj663So/u7+KsnXmDtK3sQmRRTphSRWqCUpxzqYAeWoCQ6cCL4CWi8/SBFaN9QcxXFXBbHcai5bhiuA60z2daB3qjjcIiUx+hXxMLD2BuBZ5uVdVKAAcBOO1R7B/jgEy9y3+tODsPPmNLGGVO8AaKS67Ktr8SewQqlmostoSPlMC+XZfaoPpQ6NO0drHDtkxv5jw3bAE2xs4AjvMYOfEBxQSyM/wb52mFg47iqRiaVIZ/NoVS0GjMAQiAiNNrcOiqkUIQk2lub90iChceAZ5qVedKAQWuNKGS5f8c+Pv7MFr62cnFdnKxlsaK9wIqxcRI2JFdrvvL8Nm54ZhPl/gHSbTlytg2IyNb3jQIEPsM3RETS+kGEzMJVLrZl017Ig4CaUkl3SdSIBko8phBsJhZHQSP9IhbFO/8l8EKzsk8aMIBfYfksX1/3MjMyDtctG9n2vodLP9u+l08+vp7tew9iFzK0dxYJQRC0tz8ryUdCaCXEWUIYmUB5cJVCSkFHsQ1pWdTcCAjxttMxUNQ1tBFPJ0ISEiYIfQB4uJXyTyowANiWoJbPcP0TWzhQrvEvpywa93c+19XLxx9fz5qtO8GxKUwpYhHtxBqSryhq7Xv4gj38fM9hYD2EcX0gKOUJic62DtIph1rNDcWHFyuQB96PCkJDpTLgDn60elXBAFU8LeDrrTmjJyEYtAbLtnDzab763Eus7+rhtrNPZEp6bHUCgEOVKp99eiPffn4rVGtk2/L+qKKxy2rMpyUgaT34d5LOjmBUMfguxpSODjLpNJWaG+Ik2e+18XCoAxhA0CFADKAEzxlAMbjKPQJua7U+WjG+x2YsdySkNbYlkW15frv9IMff+SD/vnXHmL7ilo0vMf+nv+PbT23ETtkUO4vGUHjQu3XIDeITDvxfHxxhi4joqzcCjVa+5VAokM9mqdZqfuM2+s6e/78BEML31ldUiIQGukMv8JGR1EkrYPgB8MMhcjNu5ClrGqujQI9weN+9j7PsFw/w4+17R53moKv4zuYdnHDHGj513xP0V6rkO4tkbNvf4TVpETRw3IWXkqGjeSKmpmoUcjnaikVqrovyGzf80J7WxuGH4+0nrQyOoIbiDpgmKUll82pgW5i3FiSF0E12UrXveiQ4PQ74BPBRoLN50mNH0rJwXRf16qtQqzFv1jTeu2AWl8+ZzhlT2kjJoTFdcl0e3t/FXTte5Ucv72bv/i5wbDK5DDZ+h07MnA7EuRCxpasegwgXv5oroGT8G1FS4Lou+VyO6Z1TiD6hZBob0TtN8YBxHTS6eR4TA8mwCAyXafhVsi6eP2/5sPU8EjCEQcCfAtcAJw378BiStCyE61Lt60YPlj1vY9phenuBUzsKLMhnmJFOIfAGivaWK2zt7+fZQ/0c7O6Dag2yadJpJ1KUYiCI1EXhoyH4lX5g3f7M4V6MMrbhhlIu6XSamVOneSOmvgkpgnSGKWdgPpqA8MLrgWAqmT73eElrfRmwvlGrjgcYTHo98Dng4mETGQMSAizLRlcrqP5ewNtaT1drUKt626WYmrxS3mhoysaybNKWOXnGWCFlvsN/kclVze9FBvGjdZHBApeIIyjl4lgO06dNx7EsXOWGXCT2nsRZwhbwzus4g2l6xsDhas3fafiS1lol0wmoGRgO15q43z8WAZ8G/hwYfi36aEmDcl2kk8bKady+Xm/nk4yD0KkoEoDv5AkGBYQIPmNY3yKhppAQFQRhpuIYhkGduiU8p5IlLKZOmYJtWVRrbjiPIZgCb2QLc+amaRF4pxEIgutIPwiBsFNrfYuGbwLDb0fTAo3VIpqtwMeBmcBngMYfTDgMCtmmchHpDDKXw+8EcfNPBHK4zl8cphLvpQIYgnUbEaN2aqSNeb4ENHR2dGI7KapujeBDIHFzz9cfQiWScDd6HfurMxNDTqE0j/sK4lzgJsYACDD2K6p6gZvxMnklMKyMGSkF8hTXxcrmkZks2lWhWRc5csI+aPQ+vxEbegob2PwiufBGEO7rZ3Zjf1q7qxUd7Z1kMhmqtarR0BEAlNH4gcVgHtG9+HN+uNbon6A5Q8BZwE/HplYjGs/ldXcC5wKnMwLHx/AUyFWNVgo7W0Sm0ihdg1C18yn0GAuSxdQmMEI8GC5kX28IeiwiLvND6PhOJdd1aS+2kcvlfF+C0Zg04AwwxBHnDD6z6VHoGzV6DvB24MkxqcoGdCTWWj4FvBOYAfwd3tj66EhHFYdf2Xa+iLRTHocIKPAOh+DQkfPI4AYxiukHRkIyGd/jEMJ3S7uuSyFfoFBoM3wJpj9Bo4weHvb6BofSMR/EJtB/odHT8ZT01jevGCUdyYW3+4Av4vkr/hzYMNIEtHGiwVtCJwROvg1hW3UzhsI9Ao1nCELCxEIWUk8xJ4CZCy/QrdXIZLMU29tw3VrcORTzJBp+gqReEB7h330a/SYNy4DvAK1thTcGNBGrsKvAd4ET8UzTe0bysNbx9tGuC5bELrT5vdX7WHGkH0SyPeQTkdFv3E++KeAIhhbviwwQ1GouqXSa9o5OtPKGvsNeTgACHXIKZaQRcAhDXygrzTfRLEVzEfCbkdTJWNFEL8n/PZ6PYgmeedT0U/KhyWX0LOUqpGVjF9o8ldEc3hORKRfI+Xh6IrpHECGpaPrhvhipuTVsx6a9oxPw3M4mSCMQmJxBh+EqyvtuDZ/Hs8I+DLzYrPzjSRMNhoA241XGNOBa4JXhIgeOF6P6fR9ECidfDPmyFqHjOJFCJD5E7J+oA4zWkcMp9CVIi/aOKUhLUnNraC0MiyHhHjauFeF8x8e01n+C1rOBrwDdo6q1MabJAoaA+vDs5gV4dvTahrEMRTJ2KBcrncHO5owl+Qn1IGFx6AZh3jMBh4j2SlCuQmhBW0cHtuPPS/Bj61ieGl1rtNa3a61XAauA20dTQeNJkw0MJv0UOBs4A880NfXHSI4bXEJrz0tpZfNY2RxauZjP1MuIhANpKL2BqJcX2jtw0hlq1WrY6MpXDmNcIbzWXUrrG4HZwJ/gzUeclDSZwRDQk3im6Rzg74EuL9jXHXQEjLAXKhc7V8BKZyKT05idDPU4iMg0PyPdQylFvthGOpuhVqsZ09tNN7HJBXhRw4e0B4IjYhoeLh0NYAhoN/AFPGXrA1qzsT6K9rV1jdYKp1BAppzIbR2QiCMh0hNE7DpQVV1XkckVyOTzuP53sANVNvIWhj6CezX8EeilAr4FtLYx9iSgowkMAVWA/wMs1+iLNNwdM+eCnqoUWgvsfBEhbe8afPexRyEIfCDE/BD+mXIVqUyWXLHozanw0wksBB8UFa31t0AvA/4IuHfca2Ec6GgEg0n3AZd4Dhp9q9ZUTCNDKRchLZxC0ZvAknRKhXFFfRCe/mGn0uTa2lBKGU4l328Ae7Tmc6BnAh8CNo1LKY8QHe1gCGgT3gysqWg+o9E7Axmu3BrCsnEKbWghQx9EKAoSugQAwhuFtGybXFubNzamlOlQehyt36bRs4AbCfWYo5uOFTAE1AfcrGEu6Ks1POY5pVyE7eDk8sYUtAYapA8OrRRCCjLFdhASpdxAQf2p1nqV9kYN/+uIl26c6VgDg0k/RbMKOE2jf6yUq6102vNBhL5lj0zvo/adVZlCWzD3skdr/hH0cXi+j0lrGh4uHctgCOhp4B1oZruu+oqVyR6y01lfwTSEg7/JhtaKdL6A5aReVK77UV8f+B/A6KdlHyX0/wMYAtqD1p/XSs20stkPWpnsBjB8FP6qp3S++DvbSb1Jue5S4Fag9a+iHOU06VZUjTtpXQW+baWz3xbSutytlq8SiE4pxSt2Kv19y0k9pbUaaiLcMU3/D0wK1TfvlIBNAAAAAElFTkSuQmCC"\x3e\n\x3c/div\x3e\n',
isDefaultContent:function(b){return b&&b.about&&b.about.aboutContent?b.about.aboutContent===d._defaultContent:!1},setDefaultContent:function(b,d){var e="";b&&b.about&&b.about.aboutContent&&(e=b.about.aboutContent);return e+'\x3cdiv style\x3d"text-align: center;"\x3e'+d.productVersion+window.productVersion+'\x3c/div\x3e\x3cdiv style\x3d"text-align: center;"\x3e'+d.kernelVersion+window.wabVersion+"\x3c/div\x3e"}};return d})},"jimu/dijit/EditorXssFilter":function(){define("dojo/_base/declare dojo/_base/array dijit/_WidgetBase dojo/_base/lang dojo/Evented libs/arcgis-html-sanitizer/arcgis-html-sanitizer".split(" "),
function(d,b,m,e,h,l){var k=null,f=d([m,h],{baseClass:"jimu-editor-xss-filter",declaredClass:"jimu.dijit.EditorXssFilter",sanitizer:null,xss:null,whiteList:{},graphicsWhiteList:{},postCreate:function(){this.whiteList=this._getWhiteList();this.sanitizer=new l({whiteList:this.whiteList,safeAttrValue:e.hitch(this,function(a,c,g,b){return"style"===c?this.xss.friendlyAttrValue(g).replace(/\"/g,"'"):"img"===a&&"src"===c?this.xss.escapeAttrValue(g):this.xss.safeAttrValue(a,c,g,b)}),onTag:e.hitch(this,function(a,
c,b){if(b.isWhite&&this._isInWhiteList(a,this.graphicsWhiteList))return c}),onIgnoreTagAttr:e.hitch(this,function(a,b,g,n){if("data-"===b.substr(0,5))return b+'\x3d"'+this.xss.escapeAttrValue(g)+'"'}),onIgnoreTag:e.hitch(this,function(a,b,g){if("o:"===a.substr(0,2)||"!--[if"===a||"!--[endif]--"===a)return b})},!0);this.xss=this.sanitizer.xss},sanitize:function(a){return this.sanitizer.sanitize(a)},_getWhiteList:function(){var a="title height width class style font-family id align text-align".split(" "),
b={div:a,h1:a,h2:a,h3:a,h4:a,h5:a,h6:a,span:a,p:a,s:a,strong:a,em:a,u:a,ol:a,ul:a,li:a,a:["href","target"].concat(a),img:["src","alt","border"].concat(a),blockquote:a,font:["face","size","color"].concat(a),pre:a,code:a,b:a,i:a,wbr:a,video:"autoplay controls loop muted poster preload".split(" ").concat(a),audio:["autoplay","controls","loop","muted","preload"].concat(a),source:["media","src","type"].concat(a),table:["cellpadding","cellspacing","border"].concat(a),tbody:[].concat(a),tr:["valign"].concat(a),
td:["valign","colspan","rowspan","nowrap"].concat(a),th:["valign","colspan","rowspan","nowrap"].concat(a),hr:a,html:a,title:a,link:["rel","href"],style:["type"].concat(a),body:a};this.graphicsWhiteList={animate:[],animateMotion:[],animateTransform:[],circle:[],clipPath:[],"color-profile":[],defs:[],desc:[],discard:[],ellipse:[],feBlend:[],feColorMatrix:[],feComponentTransfer:[],feComposite:[],feConvolveMatrix:[],feDiffuseLighting:[],feDisplacementMap:[],feDistantLight:[],feDropShadow:[],feFlood:[],
feFuncA:[],feFuncB:[],feFuncG:[],feFuncR:[],feGaussianBlur:[],feImage:[],feMerge:[],feMergeNode:[],feMorphology:[],feOffset:[],fePointLight:[],feSpecularLighting:[],feSpotLight:[],feTile:[],feTurbulence:[],filter:[],foreignObject:[],g:[],hatch:[],hatchpath:[],line:[],linearGradient:[],marker:[],mask:[],mesh:[],meshgradient:[],meshpatch:[],meshrow:[],metadata:[],mpath:[],path:[],pattern:[],polygon:[],polyline:[],radialGradient:[],rect:[],set:[],solidcolor:[],stop:[],svg:[],switch:[],symbol:[],text:[],
textPath:[],title:[],tspan:[],use:[],view:[],object:[],canvas:a};return this._extendObjectOfArrays([b,{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],
em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],
tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")},this.graphicsWhiteList])},_extendObjectOfArrays:function(a){var c={};b.forEach(a,function(a){var n=Object.keys(a);b.forEach(n,function(b){Array.isArray(a[b])&&Array.isArray(c[b])?c[b]=c[b].concat(a[b]):c[b]=a[b]},this)},this);return c},_isInWhiteList:function(a,c){c=Object.keys(c);var g=!1;b.forEach(c,function(b){a===b&&(g=!0)},this);return g}});f.getInstance=function(){null===k&&(k=new f);return k};return f})},"widgets/About/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/About/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"about-envelope" data-dojo-attach-point\x3d"envelopeNode"\x3e\r\n    \x3cdiv class\x3d"about-container" data-dojo-attach-point\x3d"splashContainerNode" tabindex\x3d"0"\x3e\r\n      \x3cdiv class\x3d"screen-readers-only" data-dojo-attach-point\x3d"firstTabNode" tabindex\x3d"-1"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"about-content" data-dojo-attach-point\x3d"customContentNode" tabindex\x3d"-1" role\x3d"document"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/About/css/style.css":".jimu-widget-about{width: 100%; height: 100%; word-break: normal; word-wrap: break-word;}.jimu-widget-about .about-envelope{height: 100%;}.jimu-widget-about .about-container{height: 100%;}.jimu-widget-about .about-content{margin: -12px auto; margin-bottom: 2px; padding-top: 12px;}.jimu-widget-about-desktop .about-envelope{min-height: 300px; max-height: 500px; min-width: 350px; max-width: 800px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}.jimu-widget-about-desktop .about-container{min-width: 350px; max-width: 800px; position: absolute; display: inline-block; background-color: #485566; box-shadow: 0 0 4px rgba(160, 160, 160, 0.4);}.jimu-widget-about-desktop .about-content{width: 560px; margin: 20px 40px; overflow: auto; color: #fff; max-height: 388px;}",
"*now":function(d){d(['dojo/i18n!*preload*widgets/About/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/html dojo/query dojo/on dojo/_base/lang ./common dijit/_WidgetsInTemplateMixin jimu/utils jimu/BaseWidget jimu/dijit/EditorXssFilter".split(" "),function(d,b,m,e,h,l,k,f,a,c){return d([a,k],{baseClass:"jimu-widget-about",postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);l.isDefaultContent(this.config)&&(this.config.about.aboutContent=l.setDefaultContent(this.config,this.nls));this.config.about.aboutContent=c.getInstance().sanitize(this.config.about.aboutContent);
this.openAtStartAysn=this.isOpen=!0;this.resize();this.openAtStartAysn=!0;f.isAutoFocusFirstNodeWidget(this)&&this.customContentNode.focus();this.own(e(this.splashContainerNode,"focus",h.hitch(this,function(){this.firstTabNode.focus()})));this.own(e(this.firstTabNode,"focus",h.hitch(this,function(){this.customContentNode.focus()})));f.setWABLogoDefaultAlt(this.customContentNode)},resize:function(){this._resizeContentImg()},onOpen:function(){this.isOpen=!0;setTimeout(h.hitch(this,function(){this.isOpen=
!1}),50)},_resizeContentImg:function(){var a=document.activeElement;b.empty(this.customContentNode);var c=b.toDom(this.config.about.aboutContent);b.place(c,this.customContentNode);this.customContentNode.nodeType&&1===this.customContentNode.nodeType&&((c=m("img",this.customContentNode))&&c.length&&c.forEach(h.hitch(this,function(a){"undefined"!==typeof a.complete&&!1===a.complete?this.own(e(a,"load",h.hitch(this,function(){this._resizeImg(a)}))):this._resizeImg(a)})),c=f.getFocusNodesInDom(this.domNode),
c.length&&(f.initFirstFocusNode(this.domNode,c[0]),f.initLastFocusNode(this.domNode,c[c.length-1])),this.isOpen||b.isDescendant(a,this.domNode))&&(a=f.getFirstFocusNode(this.domNode),f.isAutoFocusFirstNodeWidget(this)&&a.focus(),this.isOpen=!1)},_resizeImg:function(a){var c=b.getContentBox(this.customContentNode),d=b.getContentBox(a);d&&d.w&&d.w>=c.w&&b.setStyle(a,{maxWidth:c.w-20+"px",maxHeight:c.h-40+"px"})}})});