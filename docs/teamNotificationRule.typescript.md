# `teamNotificationRule` Submodule <a name="`teamNotificationRule` Submodule" id="@cdktn/provider-datadog.teamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationRule <a name="TeamNotificationRule" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

new teamNotificationRule.TeamNotificationRule(scope: Construct, id: string, config: TeamNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig">TeamNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig">TeamNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams">putMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty">putPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack">putSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams">resetMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty">resetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack">resetSlack</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmail` <a name="putEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail"></a>

```typescript
public putEmail(value: TeamNotificationRuleEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---

##### `putMsTeams` <a name="putMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams"></a>

```typescript
public putMsTeams(value: TeamNotificationRuleMsTeams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---

##### `putPagerduty` <a name="putPagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty"></a>

```typescript
public putPagerduty(value: TeamNotificationRulePagerduty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---

##### `putSlack` <a name="putSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack"></a>

```typescript
public putSlack(value: TeamNotificationRuleSlack): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetMsTeams` <a name="resetMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams"></a>

```typescript
public resetMsTeams(): void
```

##### `resetPagerduty` <a name="resetPagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty"></a>

```typescript
public resetPagerduty(): void
```

##### `resetSlack` <a name="resetSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack"></a>

```typescript
public resetSlack(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

teamNotificationRule.TeamNotificationRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

teamNotificationRule.TeamNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

teamNotificationRule.TeamNotificationRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

teamNotificationRule.TeamNotificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams">msTeams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput">emailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput">msTeamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput">pagerdutyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput">slackInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email"></a>

```typescript
public readonly email: TeamNotificationRuleEmailOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `msTeams`<sup>Required</sup> <a name="msTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams"></a>

```typescript
public readonly msTeams: TeamNotificationRuleMsTeamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty"></a>

```typescript
public readonly pagerduty: TeamNotificationRulePagerdutyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack"></a>

```typescript
public readonly slack: TeamNotificationRuleSlackOutputReference;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput"></a>

```typescript
public readonly emailInput: IResolvable | TeamNotificationRuleEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---

##### `msTeamsInput`<sup>Optional</sup> <a name="msTeamsInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput"></a>

```typescript
public readonly msTeamsInput: IResolvable | TeamNotificationRuleMsTeams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---

##### `pagerdutyInput`<sup>Optional</sup> <a name="pagerdutyInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput"></a>

```typescript
public readonly pagerdutyInput: IResolvable | TeamNotificationRulePagerduty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---

##### `slackInput`<sup>Optional</sup> <a name="slackInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput"></a>

```typescript
public readonly slackInput: IResolvable | TeamNotificationRuleSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationRuleConfig <a name="TeamNotificationRuleConfig" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

const teamNotificationRuleConfig: teamNotificationRule.TeamNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId">teamId</a></code> | <code>string</code> | The ID of the team that this notification rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email">email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams">msTeams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | ms_teams block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack">slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | slack block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The ID of the team that this notification rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#team_id TeamNotificationRule#team_id}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email"></a>

```typescript
public readonly email: TeamNotificationRuleEmail;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#email TeamNotificationRule#email}

---

##### `msTeams`<sup>Optional</sup> <a name="msTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams"></a>

```typescript
public readonly msTeams: TeamNotificationRuleMsTeams;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

ms_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#ms_teams TeamNotificationRule#ms_teams}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty"></a>

```typescript
public readonly pagerduty: TeamNotificationRulePagerduty;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#pagerduty TeamNotificationRule#pagerduty}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack"></a>

```typescript
public readonly slack: TeamNotificationRuleSlack;
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#slack TeamNotificationRule#slack}

---

### TeamNotificationRuleEmail <a name="TeamNotificationRuleEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

const teamNotificationRuleEmail: teamNotificationRule.TeamNotificationRuleEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to send email notifications to team members when alerts are triggered. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to send email notifications to team members when alerts are triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#enabled TeamNotificationRule#enabled}

---

### TeamNotificationRuleMsTeams <a name="TeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

const teamNotificationRuleMsTeams: teamNotificationRule.TeamNotificationRuleMsTeams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName">connectorName</a></code> | <code>string</code> | MS Teams connector name used to route notifications to the appropriate channel. |

---

##### `connectorName`<sup>Optional</sup> <a name="connectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

MS Teams connector name used to route notifications to the appropriate channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#connector_name TeamNotificationRule#connector_name}

---

### TeamNotificationRulePagerduty <a name="TeamNotificationRulePagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

const teamNotificationRulePagerduty: teamNotificationRule.TeamNotificationRulePagerduty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName">serviceName</a></code> | <code>string</code> | PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#service_name TeamNotificationRule#service_name}

---

### TeamNotificationRuleSlack <a name="TeamNotificationRuleSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

const teamNotificationRuleSlack: teamNotificationRule.TeamNotificationRuleSlack = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel">channel</a></code> | <code>string</code> | Slack channel name for notifications, without a leading '#'. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace">workspace</a></code> | <code>string</code> | Slack workspace name where the channel is located. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Slack channel name for notifications, without a leading '#'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#channel TeamNotificationRule#channel}

---

##### `workspace`<sup>Optional</sup> <a name="workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

Slack workspace name where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/team_notification_rule#workspace TeamNotificationRule#workspace}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamNotificationRuleEmailOutputReference <a name="TeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

new teamNotificationRule.TeamNotificationRuleEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamNotificationRuleEmail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---


### TeamNotificationRuleMsTeamsOutputReference <a name="TeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

new teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName">resetConnectorName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorName` <a name="resetConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName"></a>

```typescript
public resetConnectorName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput">connectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorNameInput`<sup>Optional</sup> <a name="connectorNameInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput"></a>

```typescript
public readonly connectorNameInput: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamNotificationRuleMsTeams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---


### TeamNotificationRulePagerdutyOutputReference <a name="TeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

new teamNotificationRule.TeamNotificationRulePagerdutyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamNotificationRulePagerduty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---


### TeamNotificationRuleSlackOutputReference <a name="TeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer"></a>

```typescript
import { teamNotificationRule } from '@cdktn/provider-datadog'

new teamNotificationRule.TeamNotificationRuleSlackOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace">resetWorkspace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannel` <a name="resetChannel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetWorkspace` <a name="resetWorkspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace"></a>

```typescript
public resetWorkspace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput">workspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace">workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `workspaceInput`<sup>Optional</sup> <a name="workspaceInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* string

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `workspace`<sup>Required</sup> <a name="workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TeamNotificationRuleSlack;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---



